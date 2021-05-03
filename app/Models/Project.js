'use strict'

const Model = use('Model')

class Project extends Model {
  // um projeto pertence a um user.
  user () {
    return this.belongsTo('App/Models/User')
  }

  // um projeto pode ter varias tarefas.
  tasks () {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Project
