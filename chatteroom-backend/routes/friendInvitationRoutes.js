const router = require('express').Router()
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({})
const auth = require('../middleware/auth')
const express = require('express')
const friendInvitationControllers = require('../controllers/friendInvitation/friendInvitationControllers')

const postFriendInvitationScheme = Joi.object({
  targetMailAddress: Joi.string().email()
})

const inviteDecisionSchema = Joi.object({
  id: Joi.string().required(),
})
const rejectDecisionSchema = Joi.object({
  id: Joi.string().required(),
})

router.post('/invite', auth, validator.body(postFriendInvitationScheme), friendInvitationControllers.controllers.postInvite)
router.post('/accept', auth, validator.body(inviteDecisionSchema), friendInvitationControllers.controllers.postAccept)
router.post('/reject', auth, validator.body(rejectDecisionSchema), friendInvitationControllers.controllers.postReject)

module.exports = router