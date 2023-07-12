import { ProjectModel } from "../schemas/project";
class Project {
    // 새로운 프로젝트 저장
    static async create(newProject) {
        const createdNewProject = await ProjectModel.create(newProject);
        return createdNewProject;
    }
    static async find(userId) {
        const projects = await ProjectModel.find({ author: userId });
        return projects;
    }

    static async findById(projectId) {
        const project = await ProjectModel.findOne({ _id: projectId });
        return project;
    }

    static async update(shortId, fieldToUpdate, newValue) {
        const filter = { shortId: shortId };
        const update = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };

        const updateProject = await ProjectModel.findOneAndUpdate(
            filter,
            update,
            option
        );
        return updateProject;
    }
}

export { Project };
