Rails.application.routes.draw do
  root "home#index"

    devise_for :users, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }

    namespace :api do
      get 'user_id', to: 'users#user_id'
    end

    get '*unmatched_route', to: 'home#index'
end
