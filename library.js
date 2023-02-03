class Media {
    constructor(title, Book, CD, Movie) {
      this._title = title
      this._Book = Book
      this._CD = CD
      this._Movie = Movie
    }
  
    get title() {
      return this._title
    }
  
    get isCheckedOut() {
      return this._isCheckedOut
    }
  
    get ratings() {
      return this._ratings
    }
  
    toggleCheckOutStatus() {
      if (this._isCheckedOut === true) {
        return this._isCheckedOut = false
      }
      else {
        return this._isCheckedOut = true
      }
    }
  
    getAverageRating() {
      let ratingLength = this._ratings.length()
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
  
      return ratingsSum / ratingLength
    }
  
    addRating(rate) {
      this._ratings.push(rate)
    }
  
    set isCheckedOut(newSet) {
      this._isCheckedOut = newSet
    }
  }
   
  class Book extends Media {
    constructor(author, title, pages) {
      super(title)
      this._author = author
      this._pages = pages
      this._isCheckedOut = false
      this._ratings = []
    }
  
    get author() {
      this._author = author
    }
  
    get pages() {
      this._pages = pages
    }
  
    getAverageRating() {
      return this._getAverageRating
    }
  
    toggleCheckOutStatus() {
      return this._toggleCheckOutStatus
    }
  
    addRating() {
      return this._addRating
    }
  }
   
  // class Media extends CD {
  
  // }
   
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title)
      this._director = director
      this._runTime = runTime
      this._isCheckedOut = false
      this._ratings = []
    }
  
    get director() {
      return this_.director
    }
  
    get runTime() {
      return this_.runTime
    }
  
    getAverageRating() {
      return this._getAverageRating
    }
  
    toggleCheckOutStatus() {
      return this._toggleCheckOutStatus
    }
  
    addRating() {
      return this._addRating
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly', 544)
  historyOfEverything.toggleCheckOutStatus()
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  
  console.log(historyOfEverything.isCheckedOut)
  console.log(historyOfEverything.getAverageRating)
  
  const speed = new Movie('Jan de Bont', 'Speed', 116)
  speed.toggleCheckOutStatus()
  speed.isCheckedOut
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating)
  