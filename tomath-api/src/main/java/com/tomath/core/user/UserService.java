package com.tomath.core.user;

import com.tomath.core.exception.GenericException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    final UserRepository usersRepository;

    public UserService(UserRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<User> getUsersList(){
        return usersRepository.findAll();
    }

    public String createUser(User user){
        if (usersRepository.findByEmail(user.getEmail()).getNameUser() != null
                && usersRepository.findByNameUser(user.getNameUser()).getNameUser() != null){
            throw new GenericException("O usuário se encontra cadastrado na base de dados");
        }
        return usersRepository.insert(user).getId();
    }

    public User loadUser(String loginUser){
        return usersRepository.findUserByEmail(loginUser);
    }
}
