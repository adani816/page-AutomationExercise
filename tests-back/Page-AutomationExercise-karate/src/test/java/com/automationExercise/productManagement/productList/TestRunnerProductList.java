package com.automationExercise.productManagement.productList;

import com.intuit.karate.junit5.Karate;

class TestRunnerProductList {

    @Karate.Test
    Karate testProductList() {
        return Karate.run("classpath:com/automationExercise/productManagement/productList/productList.feature")
                .reportDir("target/karate-reports");
    }
}
