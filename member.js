function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St',
        skills: ['js', 'html', 'css']
    };

    console.log(member.skills);
    console.log(member.skills[1]);
    console.log(member.skills.length);
    console.log(member.skills[member.skills.length - 1]);
}