// 그룹 관련 기능을 처리하는 컨트롤러 파일
const { Student, Group} = require("../models");

// 그룹 정보 조회
const getStudent = async (req, res, next) => {
    Student.findOne({
    where: {
      id: req.params.student_id,
    },
    include: {
      model: Group,
      attributes: ['id', 'name']
    },
  })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(500).send();
    });
};

const deleteStudent = async (req, res, next) => {
    Student.destroy({
    where: {
      id: req.params.group_id,
    },
  })
    .then((result) => {
      if (result) {
        res.status(200).send({ message: "Student deleted successfully" });
      } else {
        res.status(404).send({ message: "Student not found" });
      }
    })
    .catch((err) => {
      res.status(500).send();
    });
};



module.exports = {
  getStudent,
  deleteStudent
};
