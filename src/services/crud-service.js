
class CrudService{
    constructor(repository){
        this.repository = repository
    }

    async create(data){
        try {
            const result = await this.repository.create(data)
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud service!");
            throw(error)
        }
    }

    async destroy(repoId){
        try {
            await this.repository.destroy(repoId)
            return true;
        } catch (error) {
            console.log("Something went wrong in the crud service!");
            throw(error)
        }
    }

    async get(repoId){
        try {
            const result = await this.repository.get(repoId)
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud service!");
            throw(error)
        }
    }

    async getAll(){
        try {
            const result = await this.repository.getall()
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud service!");
            throw(error)
        }
    }

    async update(repoId,data){
        try {
            const result = await this.repository.update(repoId,data)
            return result;
        } catch (error) {
           console.log("Something went wrong in the crud service!");
           throw(error)
        }
    }
}

module.exports = CrudService