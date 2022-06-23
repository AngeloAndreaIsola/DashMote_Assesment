# DashMote_Assesment


Question 1
AS A SOFTWARE ENGINEER, YOU SHOULD PROVIDE EFFICIENT AND CLEAR CODE PRACTICES. CAN
YOU RUN US THROUGH YOUR SPECIFIC CODE PRACTICES AND HOW YOU DOCUMENT YOUR
CODE?
1) Function and classes should follow the single responsibility principle
2) Comment the code along the way
3) Write clear commits messages
4) Try to formalize Exception Handling
5) Delete useless code

In the case of bigger projects:
6) Write a detailed specification document, with context, use case, and user stories
7) Have a test-driven approach.

------------------------------------------------------------------------------------------------------------------------------------------------------

QUESTION 2
WHAT IS YOUR APPROACH TO BUILDING AN APPLICATION THAT IS TALKING TO MANY DIFFERENT
SERVICES? HOW WOULD YOU SET UP AN ARCHITECTURE THAT CAN SUPPORT VARIOUS
INTEGRATIONS FROM DIFFERENT SERVICES (3RD PARTY API, DBS, EMBEDDING OF SUB
APPLICATIONS). CAN YOU GIVE US SOME BEST PRACTICES YOU WOULD FOLLOW AND GIVE US
AN EXAMPLE OF YOUR IDEAS.
I would use a microservices architecture, with containers to encapsulate each component and ensure the single responsibility principle.

------------------------------------------------------------------------------------------------------------------------------------------------------

QUESTION 3
WHAT IS YOUR PREFERABLE GIT BRANCHING MODEL AND WHY?
My go-to would be Future branching (GitHub flow), that’s because I usually work on small chunks of code at the time with short delivery cycles aimed at continuous delivery.

------------------------------------------------------------------------------------------------------------------------------------------------------

QUESTION 4
WHAT ARE YOUR PREFERRED PRACTICES ABOUT DEPLOYING CODE TO PRODUCTION ? CAN YOU
EXPLAIN TO US YOUR METHODOLOGY AND GIVE EXAMPLES ON HOW YOU WOULD
IMPLEMENT A PRODUCTION PIPELINE ?
Best practices:
1) Use a deployment checklist
2) Use a continuous integration server
3) Have a rollback strategy

I would implement an automatic workflow with Blue/Green Deployments
