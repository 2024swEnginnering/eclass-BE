/**
 * @swagger
 * tags:
 *   name: Group 
 *   description: Group API
 */

/**
 * @swagger
 * /group/{lecture_id}:
 *   post:
 *     tags:
 *       - Group
 *     name: Create Group
 *     description: Create Group
 *     parameters:
 *       - name: user_id
 *         in: body
 *         schema:
 *           type: array
 *           properties:
 *             user_id:
 *               type: integer
 *           example:
 *             user_id: 1
 *       - name: lecture_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               lecture_id: 1
 *     responses:
 *       201:
 *         description: Succeess
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /group/{group_id}:
 *   get:
 *     tags:
 *       - Group
 *     name: GetGroup
 *     description: Bring the group info
 *     parameters:
 *       - name: group_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               group_id: 1
 *     responses:
 *       201:
 *         description: Succeess
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /group/{group_id}/empty_time:
 *   get:
 *     tags:
 *       - Group
 *     name: GetEmptyTime
 *     description: get list of common emtpy time of the group
 *     parameters:
 *       - name: group_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               group_id: 1
 *     responses:
 *       201:
 *         description: Succeess
 *       500:
 *         description: Fail
 */


/**
 * @swagger
 * /group/{group_id}/{student_id}:
 *   post:
 *     tags:
 *       - Group
 *     name: Add student_group
 *     description: Add student_group.
 *     parameters:
 *       - name: group_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: student_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: Authorization
 *         in: header
 *         required: true
 *         description: JWT Access token.
 *         schema:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2ltIiwiZWNsYXNzSUQiOiJzb21lX2VjbGFzc0lEMSIsImlhdCI6MTcxNzY2NTcwOSwiZXhwIjoxNzE3NjY5MzA5fQ.smC250xL5mMiU8E9s3GHW5hesAfc3-iCqZ8k9N2haHs"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       500:
*         description: Fail
 */