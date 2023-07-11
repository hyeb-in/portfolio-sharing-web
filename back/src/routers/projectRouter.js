import { Router } from "express";
import { ProjectService } from "../services/projectService";
import { login_required } from "../middlewares/login_required";
import { User } from "../db";
const projectRouter = Router();

//프로젝트작성 라우터
projectRouter.post("/project", login_required, async (req, res, next) => {
    try {
        const { title, role, startDate, endDate, description } = req.body;
        const userId = await req.currentUserId;
        const author = await User.findById(userId);
        const newProject = await ProjectService.addProject(
            title,
            role,
            startDate,
            endDate,
            description,
            author
        );
        res.status(201).json(newProject);
    } catch (error) {
        next(error);
    }
});

// 유저 작성한 프로젝트 조회. test 필요
projectRouter.get("/project/:id", login_required, async (req, res, next) => {
    // 패스파라미터 값으로 받은 아이디로 데이터베이스 조회, 해당 아이디로 작성된 프로젝트들 반환
    try {
        const userId = req.params;
        const project = await ProjectService.getProject(userId);
        res.status(200).json(project);
    } catch (error) {
        next(error);
    }
});

//패스파람으로 프로젝트 글의 id를 받아 해당 글을 업데이트
projectRouter.put(
    "/project/:projectShortId",
    login_required,
    async (req, res, next) => {
        try {
            const shortId = req.params.projectShortId;
            console.log(shortId);
            const { title, role, startDate, endDate, description } = req.body;
            const updatedProject = await ProjectService.updateProject(
                title,
                role,
                startDate,
                endDate,
                description
            );
            res.status(200).json(updatedProject);
        } catch (error) {
            console.log("응 에러야");
            next(error);
        }
    }
);

export { projectRouter };
