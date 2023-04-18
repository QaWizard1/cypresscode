class Login{

    setusername(username)
    {
        cy.get('#user_email').type(username)
    }
    
    
    setpassword(password)
    {
        cy.get('#asset-panda-pwfield').type(password)
    
    }
    
    setsub(sub)
    {
        cy.get("input[value='Log In']").click()
    }
    }
    
    export default Login;