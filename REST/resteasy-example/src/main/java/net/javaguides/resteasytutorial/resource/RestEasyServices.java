package net.javaguides.resteasytutorial.resource;

import java.util.Set;
import java.util.HashSet;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("/restapi")
public class RestEasyServices extends Application {
    
    private Set<Object> singletons = new HashSet<>();
    
    RestEasyServices(){
        this.singletons.add(new HelloWorldResource());
    }
    
    @Override
    
     public Set<Object> getSingletons()
     {
        return singletons;
     }
}