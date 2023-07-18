import cors from "cors";
import express from "express";
import { userAuthRouter } from "./routers/userRouter";
import { projectRouter } from "./routers/projectRouter";
import { awardRouter } from "./routers/awardRouter";
import { educationAuthRouter } from "./routers/educationRouter";
import { crtfcAuthRouter } from "./routers/crtfcRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import cookieParser from "cookie-parser";

import mongoose from "mongoose";
import morganMiddleware from "./middlewares/morganMiddleware";
import passport from "passport";

const ATLAS_URL =
  "mongodb+srv://elice:289hcfdlzjhbldow86ejwwm67h73lr08@cluster0.qnkmzta.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(ATLAS_URL);
mongoose.connection.on("connected", () =>
  console.log("정상적으로 연결되었습니다.")
);
const app = express();
// CORS 에러 방지
app.use(cors());

app.use(morganMiddleware);

// express 기본 제공 middleware
// express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
// express.urlencoded: 주로 Form submit 에 의해 만들어지는 URL-Encoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//todo 여기야여기
// const getUserFromJWT = require("./middlewares/getUserFromJWT");
// require("./passport")();
// app.use(passport.initialize());
// app.use(passport.initialize());
// app.use(getUserFromJWT);

// 기본 페이지
app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});
// router, service 구현 (userAuthRouter는 맨 위에 있어야 함.)

app.use(userAuthRouter);
app.use(projectRouter);
app.use(awardRouter);
app.use(crtfcAuthRouter);
app.use(educationAuthRouter);
// 순서 중요 (router 에서 next() 시 아래의 에러 핸들링  middleware로 전달됨)
app.use(errorMiddleware);

export { app };
