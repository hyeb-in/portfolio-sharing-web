const { ProjectService } = require("../services/projectService");
const Joi = require("joi");

const postProject = async (req, res, next) => {
    try {
        const { title, role, startDate, endDate, description } = req.body;
        const userId = await req.currentUserId;
        const newProject = await ProjectService.addProject(
            title,
            role,
            startDate,
            endDate,
            description,
            userId
        );
        res.status(201).json(newProject);
    } catch (error) {
        next(error);
    }
};

const getProjectId = async (req, res, next) => {
    try {
        const userId = await req.params.id;
        const project = await ProjectService.getProject(userId);
        res.status(200).json(project);
    } catch (error) {
        next(error);
    }
};

const getMyProject = async (req, res, next) => {
    try {
        const userId = await req.currentUserId;
        const project = await ProjectService.getProject(userId);
        res.status(200).json(project);
    } catch (error) {
        next(error);
    }
};

const updateProject = async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const title = req.body.title ?? null;
        const role = req.body.role ?? null;
        const startDate = req.body.startDate ?? null;
        const endDate = req.body.endDate ?? null;
        const description = req.body.description ?? null;

        const toUpdate = { title, role, startDate, endDate, description };
        const updatedProject = await ProjectService.setProject({
            projectId,
            toUpdate,
        });
        res.status(200).json(updatedProject);
    } catch (error) {
        next(error);
    }
};

const deleteProject = async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const deletedProject = await ProjectService.deleteProject(projectId);
        res.status(200).json(deletedProject);
        res.send("삭제되었습니다.");
    } catch (error) {
        next(error);
    }
};

export {
    postProject,
    getProjectId,
    getMyProject,
    updateProject,
    deleteProject,
};
