package com.trilowbyte.app.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DefController {
    protected Logger logger = LoggerFactory.getLogger(DefController.class);

    @GetMapping("say")
    public void say() {
        logger.info("say");
    }

}
