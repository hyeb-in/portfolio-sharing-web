import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import UserCertificationCard from "./UserCertificationCard";

const mockup = [
  {
    id: 1,
    title: "AWS 자격증",
    license: 12341234,
    issuedDate: 2020 - 12 - 12,
    issuer: "Amazon",
    langscore: null,
    author: "진채영",
  },
  {
    id: 2,
    title: "토익",
    license: 12341234,
    issuedDate: 2020 - 12 - 12,
    issuer: "YBM",
    langscore: 990,
    author: "진채영",
  },
];
function UserCertification({ portfolioOwnerId, isEditable }) {
  const [certifications, setCetifications] = useState([]);

  const fetchCertifications = async () => {
    // 개인 자격증 리스트를 받아오는 API 함수.
    const res = await Api.get("crtfc", portfolioOwnerId);
    console.log(res);
    setCetifications(mockup);
  };

  const updateCeltification = (id, data) => {
    const newState = certifications.map((certification) =>
      certification.id === id ? { ...data } : certification
    );
  };

  useEffect(() => [fetchCertifications()], []);

  return (
    //certification자격증 정보가 없는 유저면 추가할 수 있는 컴포넌트로 이동하는 Button 넣을 예정
    <div>
      {certifications.map((certification) => (
        <UserCertificationCard
          key={certification.id}
          certification={certification}
          isEditable={isEditable}
          onUpdate={updateCeltification}
        />
      ))}
    </div>
  );
}

export default UserCertification;
