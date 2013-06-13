get '/' do
  @users = User.all
  erb :index
end

#----------- SESSIONS -----------

get '/sessions/new' do
  erb :sign_in
end

post '/sessions' do
  @user = User.authenticate(params[:email], params[:password])
  session[:user_id] = @user.id if @user
  redirect '/'
end

delete '/sessions/:id' do
  session.clear
end

#----------- USERS -----------

get '/users/new' do
  erb :sign_up
end

post '/users' do
  @user = User.create(params[:user])
  session[:user_id] = @user.id
  redirect '/'
end
