Useful links
a. Bulma Hero background image - https://github.com/jgthms/bulma/issues/1007
b. Add fields to the model - http://wsmoak.net/2015/07/27/adding-fields-to-an-ecto-model-in-phoenix.html
c. Seeding data - https://phoenixframework.org/blog/seeding-data
d. Loading different templates for different users - https://elixirforum.com/t/how-to-load-different-templates-and-views-if-a-user-is-logged-in/13682/2
e. How to create admin routes / authentication - https://medium.com/@andreichernykh/phoenix-simple-authentication-authorization-in-step-by-step-tutorial-form-dc93ea350153
f. Postgres privileges - https://www.digitalocean.com/community/tutorials/how-to-use-roles-and-manage-grant-permissions-in-postgresql-on-a-vps--2
g. Many to many schemas - https://alchemist.camp/episodes/unified-tagging-system
h. Nested routes - https://www.smoothterminal.com/articles/nested-resources-in-phoenix
i. Phoenix channels - https://timber.io/blog/building-a-real-time-app-with-phoenix/ - http://whatdidilearn.info/2018/03/04/using-channels-in-phoenix.html
j. React / Phoenix integration - https://medium.com/@resir014/a-phoenix-react-initial-setup-that-actually-works-c943e48f1e9e

1.  Set up automated deployment
    a. Configure DNS
    i. Point Google Domain to Cloudflare - Cloudflare gives us the names of 2 name servers that we can plug into Google Domains (where we bought the domain) so that Google knows that Cloudflare will be taking over the routing when people hit the domain name.
    ii. Add Name Records to Cloudflare - Add an A record with the name @ (which sets to your domain name), pointed at the IP of your server. - Add a CNAME record with name www also pointed at the same IP so Cloudflare can point to `domain.com` and `www.domain.com`
    b. Set up Digital Ocean server
    i. Initial server setup (do all steps - refer to note below) - https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04 - NOTE: After you're done with the guide, open port 4000 with the command `sudo ufw allow 4000` so you can test the deployment later.
    ii. Install Nginx (do all steps) - https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04
    iii. Create server blocks (do all steps) - https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04
    iv. Secure Nginx with SSL certificate (do all steps - refer to note below) - https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-with-nginx-server-blocks-on-ubuntu-16-04 - NOTE:In step 4, choose option 2, Redirect. This will provide automatic redirects to HTTPS on the production server we're creating in this tutorial. - NOTE: After you are done with this guide, change Cloudflare's Crypto SSL setting to Full
    c. Automate deployment
    i. Install Elixir/Phoenix on server, configure SSH, and create test project (do steps 2-4 - refer to note below) - https://www.digitalocean.com/community/tutorials/how-to-automate-elixir-phoenix-deployment-with-distillery-and-edeliver-on-ubuntu-16-04

    - NOTE: In step 3, `Hostname example.com` should be `Hostname ssh.example.com`. Then go into your DNS and create an A record called `ssh` that points to your server IP and make sure to turn HTTP Proxy off (just click the orange cloud so it turns grey).
    - NOTE: In step 4, replace `mix phx.new --no-ecto --no-brunch myproject` with `mix phx.new myproject`
      ii. Install Nodejs and Postgres (do steps 6 & 7 - refer to note below) - https://devato.com/automate-elixir-phoenix-1-4-deployment-with-distillery-and-edeliver-on-ubuntu/ - NOTE: In step 7, replace `sudo app update` with `sudo apt update` - NOTE: In step 7, replace`pgsql` command with `psql` - NOTE: Note down the username and password of your db user, you will have to use it when you copy prod.secret to the server later.
      iii. Configure Postgres settings to allow database access with password (follow this) - https://askubuntu.com/questions/820792/peer-authentication-failed-for-user-with-all-privileges-in-postgres-9-5
      iii. Install build-essential package - Type `sudo apt-get install build-essential` in server command line
      iv. Configure Distillery and eDeliver (do steps 5-7 - refer to note below) - https://www.digitalocean.com/community/tutorials/how-to-automate-elixir-phoenix-deployment-with-distillery-and-edeliver-on-ubuntu-16-04 - NOTE: In step 5, when you copy prod.secret to your server change `example.com:/home...` to `deploy@example.com:home...` - NOTE: In step 5, after you copy prod.secret, change it to what you see here in step 8 with the database username/password that noted down from a few steps before. If the database is on a different server, then you need to add `hostname` and the IP of the server it is on. If you don't add hostname, it defaults to localhost, which is the same server you are putting prod.secret on.
    - NOTE: In step 5, use the latest eDeliver dependency that you'll find here https://github.com/edeliver/edeliver - NOTE: In step 6, below the `pre_erlang_get_and_update_deps` function, add the `pre_erlang_clean_compile()` function that you'll find in here https://devato.com/automate-elixir-phoenix-1-4-deployment-with-distillery-and-edeliver-on-ubuntu/
      v. Start Phoenix on boot - `sudo nano /lib/systemd/system/APP_NAME.service` - Edit below and Paste
      `
      [Unit]
      Description=Phoenix server for APP_NAME app
      After=network.target

          		[Service]
          		User=deploy
          		Group=deploy
          		Restart=on-failure

          		Environment=HOME=/home/deploy/app_release

          		ExecStart= /home/deploy/app_release/bin/kunvince foreground
          		ExecStop= /home/deploy/app_release/bin/kunvince stop

          		[Install]
          		WantedBy=multi-user.target
          		`
          	- `sudo systemctl enable example.service`
          	- `sudo systemctl daemon-reload`

          vi. Configure Distillery and eDeliver (do steps 5-7 - refer to note below)
          	- https://www.digitalocean.com/community/tutorials/how-to-automate-elixir-phoenix-deployment-with-distillery-and-edeliver-on-ubuntu-16-04
          vii. Migrate your database
          	- Type `mix edeliver migrate production` to migrate the database on the production server.

2.  Add front-end dependencies
    a. Change CSS to SCSS
    i. https://elixirforum.com/t/phoenix-1-4-webpack-4-and-bulma-bootstrap-4-sass/14354/7
    b. Add Bulma/Bulma Extensions/Animate.css
    i. https://elixirforum.com/t/phoenix-1-4-webpack-4-and-bulma-bootstrap-4-sass/14354/20

References

1.  Restarting Stuff
    a. Rebooting the server - `sudo systemctl reboot`
    b. Restart Nginx - `sudo systemctl restart nginx`
    b. Restart postgres - `sudo systemctl restart postgresql`
    c. Restart SSH - `sudo systemctl reload sshd`
    d. Restart firewall - `sudo ufw reload`
2.  Ports
    a. See what ports are listening - `netstat -nlt`
    b. Open port - `sudo ufw allow 8080`
    c. Close port - `ufw delete allow 8080`
3.  Folder paths
    a. Postgres configs - `/etc/postgresql/9.5/main`
    b. Error logs - `/var/log/nginx/error.log`
4.  Nginx users
    a. Adding users - `sudo adduser user_name`
    b. Deleting users - `sudo userdel user_name` - Then remove their home directory with - `sudo rm -rf /home/username`
5.  NPM
    a. See what version you are using - `npm -v` - `npm install -g npm@latest`
6.  Build and deploy - `cd ~/myproject` - `mix edeliver build release` - `mix edeliver deploy release to production --version=1.2` - `mix edeliver stop production` - `mix edeliver start production` - `mix edeliver migrate production`

        - after you do the above once, bump up the version number in Mix.exs, build the release again, and then hot load it with `mix edeliver upgrade production`.
        (if its not working, go through the whole thing again, build, release, stop and start production)

7.  Ubuntu commands
    `sudo`: elevates your privileges to root before executing whatever command comes after it
    `sudo !!`: reruns last command with higher privilages
    ``su - root`or`su - deploy`: anytime you put a username after`su - `it will assume the role of that user before running the command you put after it`CTRL + d`: drops out of your current server session
8.  Git commands
    a. Reset changes since last commit
            - `git reset HEAD --hard`

9.
