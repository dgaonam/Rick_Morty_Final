
FROM node:16

WORKDIR /app
ADD . .
RUN rm -f package-lock.json
RUN npm install
RUN npm run build
RUN npm install -g serve

#ENV NODE_ENV production
#RUN addgroup -g 1001 -S nodejs
#RUN adduser -S frontend -u 1001


#USER frontend
EXPOSE 3000
#ENV PORT 3000

CMD ["serve", "-s", "build","-l","3000"]