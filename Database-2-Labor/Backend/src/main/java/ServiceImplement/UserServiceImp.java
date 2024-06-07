package ServiceImplement;


import model.User;
import org.springframework.stereotype.Service;
import service.UserService;

@Service
public class UserServiceImp implements UserService {
    @Override
    public User getById(int id) {
        User user = new User();
        user.setId(id);
        user.setUsername("username" + id);
        user.setJoke("joke");
        return user;
    }

    @Override
    public User getByUsername(String username) {
        User user = new User();
        user.setId(2);
        user.setUsername(username);
        user.setJoke("joke");
        return user;
    }

    @Override
    public boolean save(User user) {
        System.out.println("id-" + user.getId() + ", username-" + user.getUsername() + ", joke-" + user.getJoke() + ", saved to database" + user);
        return false;
    }
}
