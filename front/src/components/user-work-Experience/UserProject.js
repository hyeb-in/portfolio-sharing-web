import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Form, Button, Table } from "react-bootstrap";
import * as Api from "../../api";

const UserProject = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState([]);

  const addProject = () => {
    if (title === '' || startDate === '' || endDate === '' || role === '' || description === '') {
      alert("입력되지 않은 항목이 있습니다.");
      return;
    }

    const newProject = {
      title,
      startDate,
      endDate,
      role,
      description,
    };

    setProject([...project, newProject]);
    setTitle('');
    setStartDate('');
    setEndDate('');
    setRole('');
    setDescription('');
  };

  return (
    <Container>
      <div>
        <h1>프로젝트</h1>
        <Row className="justify-content-md-center mt-5">
          <Col lg={8}>
            <Form.Group>
              <Form.Label>프로젝트명</Form.Label>
              <input
                type="text"
                id="title"
                value={company}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>시작</Form.Label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>종료</Form.Label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>담당 없무</Form.Label>
              <input
                type="text"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>업무 내용</Form.Label>
              <input
                type="text"
                id="role"
                value={description}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Row} className="mt-3 text-center">
              <Col sm={{ span: 20 }}>
                {/* 일단 오류안나게 바꿔두었습니다! */}
                {/* <Button variant="primary" type="submit" disabled={!isFormValid}> */}
                <Button variant="primary" type="submit">
                  추가
                </Button>
              </Col>
            </Form.Group>
            <Table striped="columns">
              <thead>
                <tr>
                  <th>프로젝트명</th>
                  <th>시작일</th>
                  <th>종료일</th>
                  <th>담당 업무</th>
                  <th>업무 내용</th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((experience, index) => (
                  <tr key={index}>
                    <td>{project.title}</td>
                    <td>{project.startDate}</td>
                    <td>{project.endDate}</td>
                    <td>{project.role}</td>
                    <td>{project.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UserProject;
