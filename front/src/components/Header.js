import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserStateContext, DispatchContext } from "../App";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: "LOGOUT" });
    // 기본 페이지로 돌아감.
    navigate("/");
  };

  return (
    <Nav activeKey={location.pathname}>
      <Nav.Item className="me-auto mb-5">
        <Nav.Link onClick={() => navigate("/")}>
          취업의 숲에 오신 것을 환영합니다!
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {userState.user ? (
          <Nav.Link onClick={() => navigate(`user/${userState.user._id}`)}>
            내 포트폴리오
          </Nav.Link>
        ) : (
          <Nav.Link onClick={() => navigate(`/login`)}>
            로그인을 해주세요
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => navigate("/network")}>모두의 숲</Nav.Link>
      </Nav.Item>
      {isLogin && (
        <Nav.Item>
          <Nav.Link onClick={logout}>로그아웃</Nav.Link>
          <Nav.Link
            onClick={() => navigate(`user/${userState.user._id}`)}
            xs={6}
            md={6}
          >
            {/** 프로필 이미지 연동하는 방법 안 후 수정예정*/}
            <Image
              src="http://placekitten.com/200/200"
              alt="랜덤 고양이 사진 (http://placekitten.com API 사용)"
              roundedCircle
              fluid
            />
          </Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
}

export default Header;
