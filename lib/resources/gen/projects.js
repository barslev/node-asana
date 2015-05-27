
/**
 * This file is auto-generated by the `asana-api-meta` NodeJS package.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing (like unused requires).
 * TODO: maybe we can just disable those specifically and keep this code
 * pretty lint-free too!
 */
/* jshint ignore:start */
var Resource = require('../resource');
var util = require('util');
var _ = require('lodash');

/**
 * A _project_ represents a prioritized list of tasks in Asana. It exists in a
 * single workspace or organization and is accessible to a subset of users in
 * that workspace or organization, depending on its permissions.
 * 
 * Projects in organizations are shared with a single team. You cannot currently
 * change the team of a project via the API. Non-organization workspaces do not
 * have teams and so you should not specify the team of project in a
 * regular workspace.
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Projects(dispatcher) {
  Resource.call(this, dispatcher);
}
util.inherits(Projects, Resource);


/**
 * Creates a new project in a workspace or team.
 * 
 * Every project is required to be created in a specific workspace or
 * organization, and this cannot be changed once set. Note that you can use
 * the `workspace` parameter regardless of whether or not it is an
 * organization.
 * 
 * If the workspace for your project _is_ an organization, you must also
 * supply a `team` to share the project with.
 * 
 * Returns the full record of the newly created project.
   * @param {Object} [data] Data for the request
   * @option {Number} workspace The workspace or organization to create the project in.
   * @option {Number} [team] If creating in an organization, the specific team to create the
   * project in.
   * @return {Promise} The response from the API
 */
Projects.prototype.create = function(
    data
) {
  var path = util.format('/projects');
  
  return this.dispatchPost(path, data);
};

/**
 * If the workspace for your project _is_ an organization, you must also
 * supply a `team` to share the project with.
 * 
 * Returns the full record of the newly created project.
   * @param {Number} workspace The workspace or organization to create the project in.
   * @param {Object} [data] Data for the request
   * @return {Promise} The response from the API
 */
Projects.prototype.createInWorkspace = function(
    workspace,
    data
) {
  var path = util.format('/workspaces/%d/projects', workspace);
  
  return this.dispatchPost(path, data);
};

/**
 * Creates a project shared with the given team.
 * 
 * Returns the full record of the newly created project.
   * @param {Number} team The team to create the project in.
   * @param {Object} [data] Data for the request
   * @return {Promise} The response from the API
 */
Projects.prototype.createInTeam = function(
    team,
    data
) {
  var path = util.format('/teams/%d/projects', team);
  
  return this.dispatchPost(path, data);
};

/**
 * Returns the complete project record for a single project.
   * @param {Number} project The project to get.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The requested resource
 */
Projects.prototype.findById = function(
    project,
    params
) {
  var path = util.format('/projects/%d', project);
  
  return this.dispatchGet(path, params);
};

/**
 * A specific, existing project can be updated by making a PUT request on the
 * URL for that project. Only the fields provided in the `data` block will be
 * updated; any unspecified fields will remain unchanged.
 * 
 * When using this method, it is best to specify only those fields you wish
 * to change, or else you may overwrite changes made by another user since
 * you last retrieved the task.
 * 
 * Returns the complete updated project record.
   * @param {Number} project The project to update.
   * @param {Object} [data] Data for the request
   * @return {Promise} The response from the API
 */
Projects.prototype.update = function(
    project,
    data
) {
  var path = util.format('/projects/%d', project);
  
  return this.dispatchPut(path, data);
};

/**
 * A specific, existing project can be deleted by making a DELETE request
 * on the URL for that project.
 * 
 * Returns an empty data record.
   * @param {Number} project The project to delete.
   * @return {Promise} The response from the API
 */
Projects.prototype.delete = function(
    project
) {
  var path = util.format('/projects/%d', project);
  
  return this.dispatchDelete(path);
};

/**
 * Returns the compact project records for some filtered set of projects.
 * Use one or more of the parameters provided to filter the projects returned.
   * @param {Object} [params] Parameters for the request
   * @option {Number} [workspace] The workspace or organization to filter projects on.
   * @option {Number} [team] The team to filter projects on.
   * @option {Boolean} [archived] Only return projects whose `archived` field takes on the value of
   * this parameter.
   * @return {Promise} The response from the API
 */
Projects.prototype.findAll = function(
    params
) {
  var path = util.format('/projects');
  
  return this.dispatchGetCollection(path, params);
};

/**
 * Returns the compact project records for all projects in the workspace.
   * @param {Number} workspace The workspace or organization to find projects in.
   * @param {Object} [params] Parameters for the request
   * @option {Boolean} [archived] Only return projects whose `archived` field takes on the value of
   * this parameter.
   * @return {Promise} The response from the API
 */
Projects.prototype.findByWorkspace = function(
    workspace,
    params
) {
  var path = util.format('/workspaces/%d/projects', workspace);
  
  return this.dispatchGetCollection(path, params);
};

/**
 * Returns the compact project records for all projects in the team.
   * @param {Number} team The team to find projects in.
   * @param {Object} [params] Parameters for the request
   * @option {Boolean} [archived] Only return projects whose `archived` field takes on the value of
   * this parameter.
   * @return {Promise} The response from the API
 */
Projects.prototype.findByTeam = function(
    team,
    params
) {
  var path = util.format('/teams/%d/projects', team);
  
  return this.dispatchGetCollection(path, params);
};


module.exports = Projects;
/* jshint ignore:end */