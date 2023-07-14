// import React, { useState, useEffect } from "react";
// import UserAwardEditForm from "./UserAwardEditForm";
// import UserAwardCard from "./UserAwardCard";
// import UserEditForm from "./UserEditForm";
// import UserCard from "./UserAwardCard";
// import * as Api from "../../api";


// function User({ portfolioOwnerId, isEditable }) {
//   // useState 훅을 통해 isEditing 상태를 생성함.
//   const [isEditing, setIsEditing] = useState(false);
//   // useState 훅을 통해 user 상태를 생성함.
//   const [award, setAward] = useState(null);

//   useEffect(() => {
//     // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
//     Api.get("award", portfolioOwnerId).then((res) => setUser(res.data));
//   }, [portfolioOwnerId]);

//   return (
//     <>
//       {isEditing ? (
//         <UserAwardEditForm
//         //   user={user}
//         //   setIsEditing={setIsEditing}
//         //   setUser={setUser}
//         />
//       ) : (
//         <AwardCard
//         //   user={user}
//         //   setIsEditing={setIsEditing}
//         //   isEditable={isEditable}
//         />
//       )}
//     </>
//   );
// }

// export default User;
