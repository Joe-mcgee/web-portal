DIR=${pwd}
#MEMNONIC=$(grep MEMNONIC .env | cut -d '=' -f 2-)
SESSIONNAME=portfolio
tmux new-session -s $SESSIONNAME \; \
	send-keys 'nvim ${DIR}' C-m \; \
	split-window -v \; \
	split-window -v \; \
	send-keys "cd web && npm run serve" C-m \; \
	split-window -h \; \
	send-keys "cd strapi && strapi develop" C-m \; \
