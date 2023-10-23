import { Blog } from "./bloghub"
export let blogs:Blog[] = [
    new Blog(1, 'Spring', 'The Spring Framework is an application framework and inversion of control container for the Java platform. The frameworks core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform', 'Technical'),
    new Blog(2,"Hibernate","Hibernate ORM is an object–relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database", "Technical"),
    new Blog(3, "Javascript", "According to the Java platform official website, the main difference between Java and JavaScript is that Java is an OOP programming language while JavaScript is an OOP programming script.", "Technical")
]
 