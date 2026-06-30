function AuthButton({

    text,

    loading = false,

    type = "submit"

}) {

    return (

        <button

            type={type}

            disabled={loading}

            className="btn btn-primary w-100 btn-lg rounded-3"

        >

            {

                loading

                    ? (

                        <>

                            <span

                                className="spinner-border spinner-border-sm me-2"

                            ></span>

                            Please wait...

                        </>

                    )

                    : text

            }

        </button>

    );

}

export default AuthButton;