const express = require('express')
const router = express.Router()
const courseController = require('../controllers/courseController')

router.route('/')
    .post(courseController.handleCreateCourse)
    .get(courseController.handleGetCourses)

module.exports = router