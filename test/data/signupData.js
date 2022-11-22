module.exports =
    [
        {
            firstName: "Jane",
            lastName: "Doe",
            Email: "email@email.com",
            password: "p@ssword1",
            confirmationPassword: "p@ssword1",
            expectedUrl: "https://magento.softwaretestingboard.com/customer/account/",
            expectedMessage: "Thank you for registering with Fake Online Clothing Store.",
            expectedFailureUrl: "https://magento.softwaretestingboard.com/customer/account/create/",
            expectedFailureMessage: "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.",
        },
    ]
;