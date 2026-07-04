import api from "./api";

/*
==============================
Start Mock Test
==============================
*/

export const startTest = async (exam = "General Mock Test") => {

    const response = await api.post(

        "/test/start",

        {

            exam

        }

    );

    return response.data;

};

/*
==============================
Submit Mock Test
==============================
*/

export const submitTest = async (

    testId,

    answers

) => {

    const response = await api.post(

        `/test/submit/${testId}`,

        {

            answers

        }

    );

    return response.data;

};

/*
==============================
Test History
==============================
*/

export const getHistory = async () => {

    const response = await api.get(

        "/test/history"

    );

    return response.data;

};

/*
==============================
Performance Summary
==============================
*/

export const getPerformance = async () => {

    const response = await api.get(

        "/test/performance"

    );

    return response.data;

};

/*
==============================
Test Details
==============================
*/

export const getTestDetails = async (

    testId

) => {

    const response = await api.get(

        `/test/${testId}`

    );

    return response.data;

};