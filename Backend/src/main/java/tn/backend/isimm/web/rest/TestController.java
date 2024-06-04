package tn.backend.isimm.web.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/test")
    public ResponseEntity<String> testEndpoint() {
        // Log an error message
        System.err.println("hellow tester");

        // Return a response
        return new ResponseEntity<>("Hellow tester", HttpStatus.OK);
    }
}
