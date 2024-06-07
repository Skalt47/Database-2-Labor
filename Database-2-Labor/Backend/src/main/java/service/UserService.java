package service;

import model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User getById(int id);

    User getByUsername(String username);

    boolean save(User user);
}
