/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");
	  app.on("organization.member_added", async (context) => {
		
		//app.log.info(context);
		context.log.info({ event: context.name, action: context.payload.action });

		return context.octokit.issues.create ({
		  owner: "github-devtools-2022",
		  repo: "jira-webhook-test",
		  title: "Welcome to Organization"
		  });
	  });
};
