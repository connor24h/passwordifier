let pass_input = document.getElementById('input'); //fix!!!!

if (pass_input !== ' ') {
  let truth_val = confirm('hello world');
  if (truth_val === true) {
    //push to db and see if it already exists in db and stuff
  }
}


db.posts.update({ title: 'Post One' }, 
  {
    $set: {
      body: 'Body of Post 2',
      category: 'Technology'
    }
  }
)