package com.tomath.core.question;

import com.tomath.core.exception.GenericException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service public class QuestionService {

    final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public List<Question> getQuestionList() {
        return questionRepository.findAll();
    }

    public String createQuestion(Question question) {
        if (questionRepository.findQuestionByDescription(question.getDescription()) != null) {
            throw new GenericException("A questão já existe na base de dados");
        }
        return questionRepository.insert(question).getId();
    }

}
