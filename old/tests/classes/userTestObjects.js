class UserTest {
    constructor(email, password, isAdmin) {
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}

const user1 = new UserTest("Mario&Luigi1", "Vulpix878", true);
const user2 = new UserTest("Mario&Luigi2", "Vulpix878", false);
const user3 = new UserTest("Mario&Luigi3", "Vulpix878", true);
const user4 = new UserTest("Mario&Luigi4", "Vulpix878", false);
const user5 = new UserTest("Mario&Luigi5", "Vulpix878", true);
const user6 = new UserTest("Mario&Luigi6", "Vulpix878", false);

module.exports = {
    user1, user2, user3, user4, user5, user6
}