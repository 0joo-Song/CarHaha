package com.chh.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@MapperScan(basePackages={"com.chh"})
@EnableTransactionManagement
@Configuration
public class BaseDatabaseConfig {

	/*
	@Qualifier("transactionManager.chh")
	DataSourceTransactionManager transactionManager;
	
    @Bean(name="dataSource.carhaha")
    @Primary
    @ConfigurationProperties(prefix = "spring.datasource.carhaha")
    public DataSource dataSourceSKIct(){
        return DataSourceBuilder.create()
                .type(HikariDataSource.class)
                .build();
    }
	*/
//    @Bean(name="sqlSessionFactory.chh")
//    @Primary
//    public SqlSessionFactory sqlSessionFactory(@Qualifier("dataSource.carhaha") DataSource dataSource) throws Exception {
//        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
//        sessionFactory.setDataSource(dataSource);
//        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
//        //sessionFactory.setMapperLocations(resolver.getResources("classpath:mapper/**/*Mapper.xml"));
//        sessionFactory.setTypeAliasesPackage("com.chh"); // Alias 어노테이션 경로 설정
//        return sessionFactory.getObject();
//    }
	
	/*
    @Bean(name="sqlSessionTemplate.chh")
    @Primary
    public SqlSessionTemplate sqlSessionTemplate(@Qualifier("sqlSessionFactory.carhaha")SqlSessionFactory sqlSessionFactory) throws Exception {
        final SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory);
        sqlSessionTemplate.getConfiguration().setMapUnderscoreToCamelCase(true);	// camel 표기법 변경
        return sqlSessionTemplate;
    }

    @Bean(name="transactionManager.chh")
    @Primary
    public DataSourceTransactionManager transactionManager (@Qualifier("dataSource.carhaha") DataSource dataSource) throws Exception {
        DataSourceTransactionManager transactionManager = new DataSourceTransactionManager(dataSource);
        return transactionManager;
    }
    */
    
}