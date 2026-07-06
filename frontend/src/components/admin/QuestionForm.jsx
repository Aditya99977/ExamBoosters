import { useState } from "react";

function QuestionForm({

    onSubmit,

    initialData = {},

    loading

}) {

    const [formData, setFormData] = useState({

        question: initialData.question || "",

        options: initialData.options || [

            "",

            "",

            "",

            ""

        ],

        correctAnswer:

            initialData.correctAnswer || "",

        subject:

            initialData.subject || "",

        difficulty:

            initialData.difficulty || "Easy"

    });

    /*
    =====================================
    Handle Input Change
    =====================================
    */

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    /*
    =====================================
    Handle Option Change
    =====================================
    */

    const handleOptionChange = (

        index,

        value

    ) => {

        const updatedOptions = [

            ...formData.options

        ];

        updatedOptions[index] = value;

        setFormData({

            ...formData,

            options: updatedOptions

        });

    };

    /*
    =====================================
    Submit Form
    =====================================
    */

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(formData);

    };
        return (

        <form onSubmit={handleSubmit}>

            <div className="mb-3">

                <label className="form-label">

                    Question

                </label>

                <textarea

                    className="form-control"

                    rows="3"

                    name="question"

                    value={formData.question}

                    onChange={handleChange}

                    required

                />

            </div>

            {

                formData.options.map((option, index) => (

                    <div

                        className="mb-3"

                        key={index}

                    >

                        <label className="form-label">

                            Option {String.fromCharCode(65 + index)}

                        </label>

                        <input

                            type="text"

                            className="form-control"

                            value={option}

                            onChange={(e) =>

                                handleOptionChange(

                                    index,

                                    e.target.value

                                )

                            }

                            required

                        />

                    </div>

                ))

            }

            <div className="row">

                <div className="col-md-4">

                    <label className="form-label">

                        Correct Answer

                    </label>

                    <select

                        className="form-select"

                        name="correctAnswer"

                        value={formData.correctAnswer}

                        onChange={handleChange}

                        required

                    >

                        <option value="">

                            Select

                        </option>

                        {

                            formData.options.map(

                                (option, index) => (

                                    <option

                                        key={index}

                                        value={option}

                                    >

                                        {

                                            option ||

                                            `Option ${String.fromCharCode(

                                                65 + index

                                            )}`

                                        }

                                    </option>

                                )

                            )

                        }

                    </select>

                </div>

                <div className="col-md-4">

                    <label className="form-label">

                        Subject

                    </label>

                    <select

                        className="form-select"

                        name="subject"

                        value={formData.subject}

                        onChange={handleChange}

                        required

                    >

                        <option value="">

                            Select Subject

                        </option>

                        <option value="Reasoning">

                            Reasoning

                        </option>

                        <option value="English">

                            English

                        </option>

                        <option value="Quantitative Aptitude">

                            Quantitative Aptitude

                        </option>

                        <option value="General Awareness">

                            General Awareness

                        </option>

                    </select>

                </div>

                <div className="col-md-4">

                    <label className="form-label">

                        Difficulty

                    </label>

                    <select

                        className="form-select"

                        name="difficulty"

                        value={formData.difficulty}

                        onChange={handleChange}

                        required

                    >

                        <option value="Easy">

                            Easy

                        </option>

                        <option value="Medium">

                            Medium

                        </option>

                        <option value="Hard">

                            Hard

                        </option>

                    </select>

                </div>

            </div>

            <div className="d-flex justify-content-end mt-4">

                <button

                    type="submit"

                    className="btn btn-primary px-4"

                    disabled={loading}

                >

                    {

                        loading

                            ? "Saving..."

                            : "Save Question"

                    }

                </button>

            </div>

        </form>

    );

}

export default QuestionForm;