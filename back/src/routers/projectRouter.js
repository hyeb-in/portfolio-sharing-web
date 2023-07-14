import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import {
    postProject,
    getProjectId,
    getMyProject,
<<<<<<< HEAD
    putProject,
=======
    updateProject,
>>>>>>> 80c782457e708bedd27d2bbb1e5d4110232ae594
    deleteProject,
} from "../controllers/project-controller";
const projectRouter = Router();

// 프로젝트 작성 라우터
projectRouter.post("/project", login_required, postProject);

// 특정 사용자 정보 조회
projectRouter.get("/project/:id", login_required, getProjectId);

// 본인 프로젝트 목록 라우터
projectRouter.get("/project", login_required, getMyProject);

// 본인 프로젝트 update 라우터
<<<<<<< HEAD
projectRouter.put("/project/:id", login_required, putProject);
=======
projectRouter.put("/project/:id", login_required, updateProject);
>>>>>>> 80c782457e708bedd27d2bbb1e5d4110232ae594

// 프로젝트 삭제 라우터
projectRouter.delete("/project/:id", login_required, deleteProject);

export { projectRouter };
