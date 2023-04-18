class Login{

   textusername=('#user_email') 
   textpassword=("#asset-panda-pwfield")
   btnsub=("input[value='Log In']")


    setusername(username)
    {
        cy.get(this.textusername).type(username)
    }
    
    
    setpassword(password)
    {
        cy.get(this.textpassword).type(password)
    
    }
    
    setsub(sub)
    {
        cy.get(this.btnsub).click()
    }
    }
    
    export default Login;