var express = require('express');
var router = express.Router();

// 登录页
router.get('/', function(req, res, next) {
	res.type('html');
	res.render('login', { title: 'Express' });
});
// 内页主页面
router.get('/main', function(req, res, next) {
	res.type('html');
	res.render('main', { title: 'Express' });
});

router.get('/user_admin', function(req, res, next) {
	res.type('html');
	res.render('user_admin', { title: 'Express' });
});

router.get('/add_timing_task', function(req, res, next) {
	res.type('html');
	res.render('add_timing_task', { title: 'Express' });
});

router.get('/timing_task_admin', function(req, res, next) {
	res.type('html');
	res.render('timing_task_admin', { title: 'Express' });
});

router.get('/add_wechat_read_task', function(req, res, next) {
	res.type('html');
	res.render('add_wechat_read_task', { title: 'Express' });
});

router.get('/wechat_read_import', function(req, res, next) {
	res.type('html');
	res.render('wechat_read_import', { title: 'Express' });
});

router.get('/wechat_read_admin', function(req, res, next) {
	res.type('html');
	res.render('wechat_read_admin', { title: 'Express' });
});

router.get('/create_new_group', function(req, res, next) {
	res.type('html');
	res.render('create_new_group', { title: 'Express' });
});

router.get('/add_group_member', function(req, res, next) {
    res.type('html');
    res.render('add_group_member', { title: 'Express' });
});

router.get('/send_group_message', function(req, res, next) {
	res.type('html');
	res.render('send_group_message', { title: 'Express' });
});

router.get('/group_admin', function(req, res, next) {
	res.type('html');
	res.render('group_admin', { title: 'Express' });
});

router.get('/qrcode_in_group', function(req, res, next) {
	res.type('html');
	res.render('qrcode_in_group', { title: 'Express' });
});

router.get('/send_friend_circle', function(req, res, next) {
	res.type('html');
	res.render('send_friend_circle', { title: 'Express' });
});

router.get('/group_member_admin', function(req, res, next) {
	res.type('html');
	res.render('group_member_admin', { title: 'Express' });
});

router.get('/send_friend_message', function(req, res, next) {
	res.type('html');
	res.render('send_friend_message', { title: 'Express' });
});

router.get('/error_admin', function(req, res, next) {
	res.type('html');
	res.render('error_admin', { title: 'Express' });
});

router.get('/batch_business_admin', function(req, res, next) {
	res.type('html');
	res.render('batch_business_admin', { title: 'Express' });
});

router.get('/add_friend', function(req, res, next) {
	res.type('html');
	res.render('add_friend', { title: 'Express' });
});

router.get('/business_data_admin', function(req, res, next) {
	res.type('html');
	res.render('business_data_admin', { title: 'Express' });
});

router.get('/role_admin', function(req, res, next) {
	res.type('html');
	res.render('role_admin', { title: 'Express' });
});

router.get('/nav_admin', function(req, res, next) {
	res.type('html');
	res.render('nav_admin', { title: 'Express' });
});

router.get('/permission_admin', function(req, res, next) {
	res.type('html');
	res.render('permission_admin', { title: 'Express' });
});

router.get('/resource_admin', function(req, res, next) {
	res.type('html');
	res.render('resource_admin', { title: 'Express' });
});

router.get('/project_config_admin', function(req, res, next) {
	res.type('html');
	res.render('project_config_admin', { title: 'Express' });
});

router.get('/wechat_account_admin', function(req, res, next) {
	res.type('html');
	res.render('wechat_account_admin', { title: 'Express' });
});

router.get('/group_admin', function(req, res, next) {
	res.type('html');
	res.render('group_admin', { title: 'Express' });
});

router.get('/friend_admin', function(req, res, next) {
	res.type('html');
	res.render('wechat_friend_admin', { title: 'Express' });
});

router.get('/read_business', function(req, res, next) {
	res.type('html');
	res.render('read_business', { title: 'Express' });
});

router.get('/re_business', function(req, res, next) {
	res.type('html');
	res.render('re_business', { title: 'Express' });
});

router.get('/hanrd_base', function(req, res, next) {
	res.type('html');
	res.render('hanrd_base', { title: 'Express' });
});

router.get('/phone_book_admin', function(req, res, next) {
	res.type('html');
	res.render('phone_book_admin', { title: 'Express' });
});

router.get('/greeting_admin', function(req, res, next) {
	res.type('html');
	res.render('greeting_admin', { title: 'Express' });
});

router.get('/dialogue_admin', function(req, res, next) {
	res.type('html');
	res.render('dialogue_admin', { title: 'Express' });
});

router.get('/add_dialogue_theme', function(req, res, next) {
	res.type('html');
	res.render('add_dialogue_theme', { title: 'Express' });
});

router.get('/add_dialogue_content', function(req, res, next) {
	res.type('html');
	res.render('add_dialogue_content', { title: 'Express' });
});

router.get('/greeting_import', function(req, res, next) {
	res.type('html');
	res.render('greeting_import', { title: 'Express' });
});

router.get('/404', function(req, res, next) {
	res.type('html');
	res.render('404', { title: 'Express' });
});

router.get('/add_nav', function(req, res, next) {
	res.type('html');
	res.render('add_nav', { title: 'Express' });
});

router.get('/add_permission', function(req, res, next) {
	res.type('html');
	res.render('add_permission', { title: 'Express' });
});

router.get('/phone_book_import', function(req, res, next) {
	res.type('html');
	res.render('phone_book_import', { title: 'Express' });
});

router.get('/add_role', function(req, res, next) {
	res.type('html');
	res.render('add_role', { title: 'Express' });
});

router.get('/add_user', function(req, res, next) {
	res.type('html');
	res.render('add_user', { title: 'Express' });
});

router.get('/import_wechat_account', function(req, res, next) {
	res.type('html');
	res.render('import_wechat_account', { title: 'Express' });
});

router.get('/account_to_user', function(req, res, next) {
	res.type('html');
	res.render('account_to_user', { title: 'Express' });
});

router.get('/account_to_device', function(req, res, next) {
	res.type('html');
	res.render('account_to_device', { title: 'Express' });
});

router.get('/proxy_repair', function(req, res, next) {
	res.type('html');
	res.render('proxy_repair', { title: 'Express' });
});

module.exports = router;
