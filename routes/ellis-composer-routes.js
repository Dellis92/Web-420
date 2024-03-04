/**
 *Title: Ellis Composer Routes
 Author: DeVonte Ellis
 */
   //import express, router, and composers
   const express = require('express');
const { Collection } = require('mongoose');
    const router = express.Router();
    const = require("../models/ellis-composer");

    //find all composers
*    findAllComposers
*    @openapi
*    /api/composers:
*        get:
*            tags:
*                -Composers
*                description: An API for returning an array of composers.
*                summary: returns an array of composers in JSON. 
*                responses:
*                '200':
*                    description: documents for composers 
*                '500':
*                    description: Server exception. 
*                '501':
*                    description: MongoDB exception. 
*    /
    router.get("/composers", async(req, res)=> {
        try {
            composer.find({}, function (err, composers) {
                if (err) {
                    console.log(err);
                    res.statusMessage(501).send({
                        messange: 'MongoDB Excepton: ${err}',
                    });
                } else {
                    console.log(composers);
                    res.json(composers);
                }
            });
        } catch (e) {
            res.status(500).send({
                message: 'Server Exception: ${e.message}',
            });
        }
    });

   //find all composers by id
*    findComposerById
*    @openapi
*    /api/composers/{id}:
*        get:
*            tags:
*                -Composers 
*                description: API for returning a composer by their id
*                summary: returns a composer by id
*                parameters:
*                    -name: id
*                    in: path 
*                    required: true 
*                    description: composer id 
*                    schema: 
*                        type: string 
*                        responses: 
*                        '200':
*                            description: composer id 
*                        '500':
*                            description: Server Exception 
*                        '501': 
*                            description: MongoDB exception
*    /

    router.get("/compoers/:id". async (req, res) => {
        try {
            composer.findOne({_id: req.params.id }, function (err, composer) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: 'MongoDB Exception: ${err}',
                    });
                } else {
                   console.log(composer);
                    res.json(composer);
                }
            });
        } catch (e) {
            res.status(500). send({
                message: 'Server Exception: $(e.message}',
            });
        }
    });

    //Create a new composer
*    @openapi
*    /api/composers:
*        post:
*            tags:
*                -Composers
*                name: createComposer
*                description: API for adding a new composer 
*                summary: creates a new composer
*                requestBody:
*                    description: Composer information 
*                    content:
*                        application/json:
*                        schema:
*                        required:
*                            -firstName
*                            -lastName
*                            properties:
*                            firstName:
*                                type: string
*                            lastName:
*                                type: string 
*                responses:
*                    '200':
*                        description: Composer added 
*                    '500': 
*                        description: Server Exception
*                    '501':
*                        description: MongoDB Exception 
*    /
    router.post('/composers', async (req, res) => {
       try {
            const newComposer = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            }

            await Composer.create(newComposer, function(err, composer) {
               if (err) {
                    console.log(err);
                    res.status(501).send({
                        "message": 'MongoDB Exception: ${err}'
                    });
               } else {
                    console.log(composer);
                    res.json(composer);
                }
            });
            catch (e) {
                console.log(e);
                res.status(500).send({
                    message: 'Server Exception:{e.message}'
                });
            }
      }
    });

*    //update composer by id
*    @openapi
*    /api/composers/{id}:
*        put:
*            tags:
*            -Composers
*            name: updateComposerById
*            description: API for updating a composer by their id
*            summary: updates a composer 
*            paramerters:
*                -name: id
*                in: path
*                required: true
*                description: id to filter collection 
*                schema: 
*                    type: string
*            requestBody:
*                description: Composer information
*                content:
*                    application/json:
*                    schema:
*                    required:
*                        -firstName
*                        -lastName
*                    properties:
*                        firstName:
*                            type: string
*                        lastName:
*                            type: string 
*            responses:
*                '200':
*                    description: array of composers
*                '401':
*                    description: invalid composerId 
*                '500':
*                    description: Server Exception 
*                '501':
*                    description: MongoDB Exception
*/

router.put(".composers.:id", async (req, res) => {
    try {
        Composer.findOne({_id:req.params.id }, function (err, composer) {
            if (err) {
                console.log(err);
                res.status.apply(401).send({
                    message: 'Invalid ComposerId: ${err}',
                });
            } else {
                composer.set({
                    firstName: req.body.firstName,
                    lastName:req.body.lastName,
                });
                composer.save(function (err, updatedComposer) {
                    if (err) {
                        console.log(err);
                        res.json(updatedComposer);
                    } else {
                        console.log(updatedComposer);
                        res.json(updatedComposer);
                    }
                });
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500.send({
            message::'server Exception ${e.message}' 
        }));
    }
});

//delete a composer by thier id
*deleteComposerById
*@openapi
*/api/composers/{id}:
*    delete:
*        tags:
*        -Composers 
*        name: delteCOmposerById 
*        description: API for deleting a composer
*        summary: removes a composer 
*        parameters:
*            -name: id 
*            in: path 
*            required: true 
*            description: composer id
*            schema: 
*                type: string 
*            responses:
*            '200':
*            descripton: Composer
*            '500':
*            description: Server Exception
*            '501':
*            description: MongoDB exception
*/

router.delete('/composers/:id', async (req, res) => { 
    try {
        Composer.findByIdAndDelete({_id: reqparams.id}, function (err, composer) {
            if (err) {
                console.log(err);
                res.status(401).send({
                    message: 'Invalid Composer Id: ${err}',
                });
            } else {
                res.json(composer);
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Server Exception: ${e.message}',
        });
    }
});