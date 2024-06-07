package controller;

import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.UserService;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/id")
    public User getById(@RequestParam(value = "id", defaultValue = "1") int id) {
        return userService.getById(id);
    }

    @RequestMapping(value = "/username", method = RequestMethod.GET)
    public User getByUsername(@RequestParam(value = "username", defaultValue = "John Doe") String username) {
        return userService.getByUsername(username);
    }

    @PostMapping("/save")
    public boolean saveUser(@RequestBody(required = true) User user) {
        return userService.save(user);
    }

}
