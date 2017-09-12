abort('Please run this using `bundle exec rake`') unless ENV["BUNDLE_BIN_PATH"]
require 'html-proofer'
require 'jekyll'

desc "Build the site…"
task :build do
  puts 'Building site...'
  Jekyll::Commands::Build.process(profile: true)
end

desc "Check the site…"
task :check => [:build] do
  options = {
    :check_html => true,
    :assume_extension => true,
    :check_img_http => true,
    :parallel => { :in_processes => 7},
    :typhoeus => {
      :followlocation => true,
      :connecttimeout => 10,
      :timeout => 30,
      :ssl_verifypeer => false,
      :ssl_verifyhost => 0
    },
    :hydra => { :max_concurrency => 50 },
    :cache => { :timeframe => '7d' }
  }
  begin
    HTMLProofer.check_directory("./_site", options).run
  rescue => msg
    puts "#{msg}"
  end
end

task :default => [:check]