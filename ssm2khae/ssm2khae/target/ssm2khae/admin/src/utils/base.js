const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm2khae/",
            name: "ssm2khae",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm2khae/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电影行业数据库"
        } 
    }
}
export default base
