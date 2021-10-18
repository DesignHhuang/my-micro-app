import Vue from 'vue'
import { ElMessage } from 'element-plus'
import Core from "../core/core"
import axios from 'axios'
import { config } from '../config/config'
import { apiConfigs } from '../../static/urlConfig'

export const apiName = {
    upload: 'b2b/qiniu/uploadfile',
    login: 'b2b/Customer/LoginV2', // 登陆
    // register: 'b2b/Customer/HouseKeeperRegisterV2', // 注册
    register: 'b2b/Customer/HouseKeeperRegister', // 注册
    SecurityCode: 'b2b/File/SecurityCode',//获取图形验证码
    SendTravelVerificationCode: 'b2b/Common/SendTravelVerificationCode',//校验图形验证码
    sendSmsCode: 'b2b/Common/SendVerificationCode',//发送验证码
    CheckPhoneIsRegister: 'b2b/Customer/CheckPhoneIsRegister',  //忘记密码验证手机号
    GetFlightListV2: 'b2b/Flight/GetFlightListV2',
    GetAirportCityList: 'b2b/Flight/GetAirportCityList',
    SearchHotelDestinationList: 'b2b/Hotel/SearchHotelDestinationList',
    GetTrainStationList: 'b2b/TrainTicket/GetTrainStationList',
    GetPassengerList: 'b2b/Customer/GetPassengerList',//获取用户常用联系人列表
    MaintainPassenger: 'b2b/Customer/MaintainPassenger',//增加用户常用联系人
    GetPassengerInfo: 'b2b/Customer/GetPassengerInfo',//获取单个常用联系人信息
    DeletePassenger: 'b2b/Customer/DeletePassenger',//删除常用联系人
    GetCustomerIndexInfo: 'b2b/Customer/GetCustomerIndexInfo',//获取用户主页信息
    GetOrderListInfo: 'b2b/Order/GetOrderListInfoV2',//获取订单列表
    GetFlightOrderDetailV2: 'b2b/Flight/GetFlightOrderDetailV2',//机票订单详情
    GetFlightSeatList: 'b2b/Flight/GetFlightSeatList',//获取机票价格列表
    GetTrainDetail: 'b2b/TrainTicket/GetTrainDetail',//获取火车票详情
    GetTrainList: 'b2b/TrainTicket/GetTrainList',//获取机票价格列表
    getHotelList: 'b2b/Hotel/Search',//获取酒店列表
    GetHotelDetailInfo: 'b2b/Hotel/GetHotelDetailInfo',//获取酒店详情
    GetHotelMoreInfo: 'b2b/Hotel/GetHotelMoreInfo',//获取酒店详情2
    GetRoomList: 'b2b/Hotel/GetRoomListV3',//获取酒店房间列表
    SetCollectionHotel: 'b2b/Customer/SetCollectionHotel',//收藏（取消收藏）酒店
    SearchPrompts: 'b2b/Hotel/SearchPrompts',//获取酒店关键字搜索下拉待选列表
    GetHotelFilter: 'b2b/Hotel/GetHotelFilter',//获取酒店关键字搜索下拉待选列表
    QueryMyTravelStandard: 'b2b/Customer/QueryMyTravelStandard',//酒店下单前获取差标
    GetHotelOrderSubmitInfoV2: 'b2b/Order/GetHotelOrderSubmitInfoV2',//获取酒店创建订单信息
    SubmitHotelOrderInfoV2: 'b2b/Order/SubmitHotelOrderInfoV2',//酒店提交创建订单
    GetHotelOrderInfo: 'b2b/Order/GetHotelOrderInfo',//查看酒店订单详情
    GetHotelOrderPriceV2: 'b2b/Order/GetHotelOrderPriceV2',//查看酒店费用明细
    CancelHotelOrder: 'b2b/Order/CancelHotelOrder',//取消酒店订单
    GetTrainOrderDetailV2: 'b2b/TrainTicket/GetTrainOrderDetailV2',//火车订单详情
    CancelTrainOrder: 'b2b/TrainTicket/CancelTrainOrder',//取消火车票订单
    CreateTrainOrder: "b2b/TrainTicket/CreateTrainOrder",//创建火车票订单接口
    GetTrainRefundInfo: "b2b/TrainTicket/GetTrainRefundInfo",//获取退改规则接口
    ApplyTrainOrderRefund: "b2b/TrainTicket/ApplyTrainOrderRefund", //提交火车票退票申请
    GetCarOrderDetail: 'b2b/Car/GetCarOrderDetail',//查看用车订单详情
    GetServerPhone: 'b2b/Order/GetServerPhone',//获取客服电话
    GetRefundAndModifyStipulate: 'b2b/Flight/GetRefundAndModifyStipulate',//获取退改签规则
    GetBaggageruleAndRefundModifyStipulate: 'b2b/Flight/GetBaggageruleAndRefundModifyStipulate',//获取最新退改签规则
    CheckFlightStandard: 'b2b/Flight/CheckFlightStandard',
    ValidateFlightOrder: 'b2b/Flight/ValidateFlightOrder',//校验下单的舱位及价格
    GetFlightOrderSubmitInfo: 'b2b/Flight/GetFlightOrderSubmitInfo',//机票创建订单获取信息接口
    CheckTrainStandard: 'b2b/TrainTicket/CheckTrainStandard',//校验火车票
    GetTrainOrderSubmit: 'b2b/TrainTicket/GetTrainOrderSubmit',//火车票创建订单获取信息接口
    GetOrderPayInfo: 'b2b/Order/GetOrderPayInfo',//获取支付信息
    GetReturnFlightOrderSubmitInfo: 'b2b/Flight/GetReturnFlightOrderSubmitInfo',//获取创建订单信息
    CreateFlightOrder: 'b2b//Flight/CreateFlightOrder',//创建订单
    CreateReturnFlightOrder: 'b2b/Flight/CreateReturnFlightOrder',//创建往返机票订单
    GetPayInfoByPayType: 'b2b/Common/GetPayInfoByPayType',//支付接口
    GetApproverOrderNum: 'b2b/Customer/GetApproverOrderNum',//支付相关
    CheckPayResult: 'b2b/Payment/CheckPayResult',//查询支付结果
    CancelFlightOrder: 'b2b//Flight/CancelFlightOrder',//取消机票订单
    QueryRoleConfigList: 'b2b/Customer/QueryRoleConfigList',//获取差标列表
    QueryRoleConfigDetail: 'b2b/Customer/QueryRoleConfigDetail',//编辑单个差标信息
    GetRoleEnumInitialize: 'b2b/Customer/GetRoleEnumInitialize',//获取编辑差标下拉信息
    MaintainRoleConfig: 'b2b/Customer/MaintainRoleConfig',//保存差标
    ApprovalTravelBusinessOrder: 'b2b/TMC/ApprovalTravelBusinessOrder ',//提交审批订单
    GetFlightOrderDetail: 'b2b/TMC/GetFlightOrderDetail',//我的审批-机票详情
    approvalHotelOrderInfo: 'b2b/TMC/GetHotelOrderInfo',//我的审批-机票详情
    GetTrainOrderDetail: 'b2b/TMC/GetTrainOrderDetail',//我的审批-火车票详情
    GetRechargeTips: 'b2b/Customer/GetRechargeTips',//获取充值信息（支付方式列表，面值列表等）
    RechargeOffline: 'b2b/Customer/RechargeOffline',//线下充值
    GetDaliyReminderOrderInfo: 'b2b/Customer/GetDaliyReminderOrderInfo',//获取带出行信息
    GetCollectionHotelList: 'b2b/Customer/GetCollectionHotelList',//获取带出行信息
    EditPassword: 'b2b/Customer/EditPassword',//修改密码
    GetApproveOrderList: 'b2b/TMC/GetApproveOrderList',//获取待/已审核订单
    GetOverStandardReson: 'b2b/Order/GetOverStandardReson',//获取超标理由
    GetPassengersAndReasons: "b2b/Flight/GetOrderInfosForChangeAndRefund",  //获取乘客列表和退改原因接口
    FlightPassengersModify: "b2b/Flight/FlightPassengersModify", //机票 提交修改乘客
    TrainGetChangePassengerInfo: "b2b/TrainTicket/GetChangePassengerInfo", //获取火车票改签乘客信息
    GetRefundTicketCostInfo: "b2b/Flight/GetRefundTicketCostInfo",  //获取退票费用接口
    GetDepartmentList: 'b2b/Customer/GetDepartmentList',//获取部门列表
    GetCustomerStuffList: 'b2b/Customer/GetCustomerStuffList',//获取指定部门的员工列表
    ApplyFlightOrderRefund: "b2b/Flight/ApplyFlightOrderRefund",  //提交机票退票信息
    GetFlightOrderChange: "b2b/Flight/GetFlightOrderChange", //获取机票日期改签订单提交信息
    ChangeFlightOrder: "b2b/Flight/ChangeFlightOrder", //提交机票日期改签
    GetChangeFlightList: "b2b/Flight/GetChangeFlightList", //获取改签航班数据
    GetTrainOrderChange: "b2b/TrainTicket/GetTrainOrderChange", //获取火车票改签订单提交信息
    GetDepartmentStuffInfo: "b2b/Customer/GetDepartmentStuffInfo",  //查看员工差标信息
    DeleteEnterpriseStuff: "b2b/Customer/DeleteEnterpriseStuff",  //删除员工
    MaintainDepartmentStuff: "b2b/Customer/MaintainDepartmentStuff",  //添加（编辑）员工
    SearchStuffAndDepartment: "b2b/Customer/SearchStuffAndDepartment",  //搜索部门、员工
    GetDepartmentInfo: "b2b/Customer/GetDepartmentInfo",  //搜索部门、员工
    MaintainDepartment: "b2b/Customer/MaintainDepartment",  //添加（编辑）部门
    DepartmentDelete: "b2b/Customer/DepartmentDelete",  //删除部门
    GetTransferEnterpriseStuffList: "b2b/Customer/GetTransferEnterpriseStuffList",  //获取所有员工（转移管理员）
    TransferEnterpriseManager: "b2b/Customer/TransferEnterpriseManager",  //获取所有员工（转移管理员）
    ChangeTrainOrder: "b2b/TrainTicket/ChangeTrainOrder", //火车票订单改签提交
    MakeQRCode: "b2b/Common/MakeQRCode", //获取微信支付二维码
    AvailHotelBooking: "b2b/Order/AvailHotelBooking",//获取酒店可定房间数
    GetNationalityDataList: "b2b/common/GetNationalityDataList",//获取国籍列表
    GetIdentityTypeList: "b2b/common/GetIdentityTypeList",//获取证件类型列表
    GetSummaryStatistics: "b2b/Statistics/GetSummaryStatistics",  //获取账单统计
    GetBillDetails: "b2b/Statistics/GetBillDetails",  //获取账单明细
    GetBillDetailsV2: "b2b/Statistics/GetBillDetailsV2",  //获取账单明细(新接口)
    GetEnterpriseSurvey: "b2b/Enterprise/GetEnterpriseSurvey", //获取企业信息
    GetEnterpriseRoleSurvey: "b2b/Enterprise/GetEnterpriseRoleSurvey", //获取差标名称
    GetEnterpriseStuffList: "b2b/Customer/GetEnterpriseStuffList",    //获取不同类型的员工
    GetEnterpriseContractSurvey: "b2b/Enterprise/GetEnterpriseContractSurvey",  //获取企业合作信息
    GetEnterpriseSettleSurvey: "b2b/Enterprise/GetEnterpriseSettleSurvey",  //获取企业结算信息
    GetEnterpriseCostSurvey: "b2b/Enterprise/GetEnterpriseCostSurvey",    //获取企业消费概况
    GetCustomerApplyList: "b2b/Customer/GetCustomerApplyList",  //获取审核员工列表
    ApproveCustomerApply: "b2b/Customer/ApproveCustomerApply",  //审核员工
    UploadImage: "b2b/Common/UploadImage",//上传图片
    GetEnterpriseCertify: "b2b/Enterprise/GetEnterpriseCertify",//获取资质接口
    MaintainEnterpriseCertify: "b2b/Enterprise/MaintainEnterpriseCertify",//新增编辑资质接口
    DeleteEnterpriseCertify: "b2b/Enterprise/DeleteEnterpriseCertify",//删除资质接口
    GetInvoiceTitleInfo: 'b2b/Customer/GetInvoiceTitleInfo', //	发票抬头查询
    SubmitInvoiceTitleInfo: 'b2b/Customer/SubmitInvoiceTitleInfo', //发票抬头提交
    DelInvoiceTitleInfo: 'b2b/Customer/DelInvoiceTitleInfo', //	发票抬头删除
    SubmitMailInfo: 'b2b/Customer/SubmitMailInfo', //	地址提交
    DelMailInfo: 'b2b/Customer/DelMailInfo', //	地址删除
    GetMailInfo: 'b2b/Customer/GetMailInfo', //	地址查询
    GetEnterpriseExternal: 'b2b/Enterprise/GetEnterpriseExternal', // 获取企业拓展信息
    GetAreaList: 'b2b/Common/GetAreaList',//获取省市区
    MaintainEnterpriseBudget: "b2b/Enterprise/MaintainEnterpriseBudget",  //新增、编辑预算
    DeleteEnterpriseBudget: "b2b/Enterprise/DeleteEnterpriseBudget",  //新增预算
    GetEnterpriseBudget: "b2b/Enterprise/GetEnterpriseBudget",  //获取预算模板
    GetEnterpriseBudgetList: "b2b/Enterprise/GetEnterpriseBudgetList",  //获取预算列表
    GetEnterpriseBudgetCost: "b2b/Enterprise/GetEnterpriseBudgetCost", //获取预算消费
    GetExpensesList: "b2b/Customer/GetExpensesList", //报销单列表
    GetExpensesDetail: "b2b/Customer/GetExpensesDetail",
    GetProjectList: "b2b/Customer/GetProjectList", //获取项目中心列表
    MaintainProject: "b2b/Customer/MaintainProject", //新增编辑项目
    DeleteProject: "b2b/Customer/DeleteProject", //删除项目
    GetProjectMemberList: "b2b/Customer/GetProjectMemberList", //获取项目成员
    AddProjectMember: "b2b/Customer/AddProjectMember", //添加项目成员
    DeleteProjectMember: "b2b/Customer/DeleteProjectMember", //删除项目成员
    GetMyCostCenter: "b2b/Customer/GetMyCostCenter", //我的成本中心
    GetSystemTime: 'b2b/Common/GetSystemTime',    //获取当前时间
    GetCostTypeList: "b2b/CustomerBill/GetCostTypeList", //获取费用类型列表
    SaveCustomerCostType: "b2b/CustomerBill/SaveCustomerCostType",//保存费用类型
    DeleteCustomerCostType: "b2b/CustomerBill/DeleteCustomerCostType",//删除费用类型
    GetBillList: "b2b/CustomerBill/GetBillList",//获取单据列表
    GetApplyBillStatistics: 'b2b/CustomerBill/GetApplyBillStatistics', //获取日常单据统计信息
    GetLoanBillStatistics: "b2b/CustomerBill/GetLoanBillStatistics",//获取借款单据统计信息
    GetReimbursementBillStatistics: "b2b/CustomerBill/GetReimbursementBillStatistics",//获取报销单据统计信息
    GetDailyApplyBillDetail: "b2b/CustomerBill/GetDailyApplyBillDetail",//获取日常申请单详情
    GetTravelApplyBillDetail: "b2b/CustomerBill/GetTravelApplyBillDetail",//获取出差申请单详情
    GetLoanApplyBillDetail: "b2b/CustomerBill/GetLoanApplyBillDetail",//获取借款单详情
    GetReimbursementBillDetail: "b2b/CustomerBill/GetReimbursementBillDetail",//获取报销单详情
    BillMakeMoney: "b2b/CustomerBill/BillMakeMoney",//打款
    BillsMakeMoney: "b2b/CustomerBill/BillsMakeMoney",//批量打款
    GetEnterpriseCostReport: "b2b/Enterprise/GetEnterpriseCostReport",  //获取报告单
    ApplyBusinessTravelExperienceAccount: "b2b/Customer/ApplyBusinessTravelExperienceAccount",//提交申请
    UpdateCostTypeByReimbursementBill: 'b2b/CustomerBill/UpdateCostTypeByReimbursementBill',  //修改费用状态
    GetJsApiConfig: 'b2b/oa/GetJsApiConfig',  //获取企业配置
    GetCustomerIdList: 'b2b/Customer/GetCustomerIdList', //获取用户Id列表
    ApprovalBill: "b2b/CustomerBill/ApprovalBill",//审批单据
    UpdateCostDeductionByReimbursementBill: 'b2b/CustomerBill/UpdateCostDeductionByReimbursementBill', //修改费用发票是否能抵扣
    GetCustomerInfo: 'b2b/Customer/GetCustomerInfo',
    UploadFile: 'b2b/Common/UploadFile', // 上传文件
    EditBillFile: 'b2b/CustomerBill/EditBillFile', //编辑单据文件
    GetNewReimbursementBillDetail: 'b2b/CustomerBill/GetNewReimbursementBillDetail', //新版获取报销单详情
    GetLoginUrl: "b2b/Customer/GetLoginUrl", //获取钉钉登录地址
    DeletePayerInfo: "b2b/CustomerBill/DeletePayerInfo", //删除付款单位
    GetPayerList: "b2b/CustomerBill/GetPayerList", //获取付款单位列表
    SavePayerInfo: "b2b/CustomerBill/SavePayerInfo", //保存付款单位
    GetBankList: "b2b/CustomerBill/GetBankList", //获取银行列表
    GetBillPresonalAccountListPage: "b2b/CustomerBill/GetBillPresonalAccountListPage",//获取往来单位列表
    SaveBillPersonalAccountInfo: "b2b/CustomerBill/SaveBillPersonalAccountInfo",//保存往来单位
    DeleteBillPersonalAccountInfo: "b2b/CustomerBill/DeleteBillPersonalAccountInfo",//保存往来单位
    GetProvinceList: "b2b/Common/GetProvinceList", //获取省份列表
    GetCityList: "b2b/Common/GetCityList", //获取省份列表
    GetPaymentBillDetail: "b2b/CustomerBill/GetPaymentBillDetail",//获取付款单详情
    GetPayerListAll: "b2b/CustomerBill/GetPayerListAll",//获取所有付款单位
    GetPaymentBillStatistics: "b2b/CustomerBill/GetPaymentBillStatistics", //获取付款单统计
    GetCorporateReimbursementBillDetail: "b2b/CustomerBill/GetCorporateReimbursementBillDetail",//获取对公打款报销单详情
    GetCorporateReimbursementBillStatistics: "b2b/CustomerBill/GetCorporateReimbursementBillStatistics",//获取对公打款统计信息    
    GetTravelSubsidyDetail: "b2b/Statistics/GetTravelSubsidyDetail", //获取差补列表    
    MaintainDepartmentStuffWorkPlace: 'b2b/Customer/MaintainDepartmentStuffWorkPlace',  //编辑工作地
    OrganizationFileImport: 'b2b/Common/OrganizationFileImport', // 导入文件
    WorkPlaceImport: 'b2b/Common/ImportCustomerStuffWorkPlace', // 导入工作地文件
    downStuffFileTemplate: 'b2b/template/Temp_Department.xls', // 下载模板,
    downWorkPlaceTemplate: 'b2b/template/Temp_WorkPlace.xls', // 下载工作地模板,
    GetPublicConfigValue: 'b2b/Common/GetPublicConfigValue'
}

export const commonApi = {
    GetTravelStandardInitialize: "common/api/TravelStandardManager/GetTravelStandardInitialize",   //获取差标初始化数据
    MaintainRoleConfig: "common/api/TravelStandardManager/MaintainRoleConfig",  //维护差标
    GetRoleConfigList: "common/api/TravelStandardManager/GetRoleConfigList",   //差标内容展示
    GetRoleConfigDetail: "common/api/TravelStandardManager/GetRoleConfigDetail",  //获取差标详情
    GetEnterpriseRoleSurvey: "common/api/TravelStandardManager/GetEnterpriseRoleSurvey", //获取差标列表
    GetMyTravelStandard: "common/api/TravelStandardManager/GetMyTravelStandard", //查询个人差标
    GetHotelCityRoleTemplates: "common/api/TravelStandardManager/GetHotelCityRoleTemplates", //获取城市分组模板
    DeleteHotelCityRoleTemplate: "common/api/TravelStandardManager/DeleteHotelCityRoleTemplate", //删除城市分组模板
    GetCustomerStuffListByRoleId: "common/api/Customer/GetCustomerStuffListByRoleId",  //获取差标下的员工列表
    MaintainCustomerStuff: "common/api/Customer/MaintainCustomerStuff",  //批量添加员工差标
    DeleteCustomerStuff: "common/api/Customer/DeleteCustomerStuff",  //批量删除员工差标
    GetTravelApprovalFlowConfig: "common/api/TravelApprovalManager/GetTravelApprovalFlowConfig",  //获取自定义审批信息
    MaintainTravelApprovalFlowConfig: "common/api/TravelApprovalManager/MaintainTravelApprovalFlowConfig",  //保存自定义审批
    GetCustomerIndexInfo: 'common/api/Customer/GetCustomerIndexInfo',//获取用户主页信息
    GetApprovalAuditorList: 'common/api/TravelApprovalManager/GetApprovalAuditorList', //获取业务单子的审批流信息
    GetRoleList: 'common/api/Customer/Role/GetRoleList', //获取角色列表 
    GetRoleMemberList: 'common/api/Customer/Role/GetRoleMemberList', //获取角色会员关联关系
    MaintainRole: 'common/api/Customer/Role/MaintainRole', //维护角色信息--新增和修改
    DelRole: 'common/api/Customer/Role/DelRole', //维护角色信息--删除
    AddRoleMember: 'common/api/Customer/Role/AddRoleMember', //添加角色会员关系信息
    DelRoleMember: 'common/api/Customer/Role/DelRoleMember', //删除角色会员关系信息
    DeleteRoleSurvey: 'common/api/TravelStandardManager/DeleteRoleSurvey', //删除差标
    GetApproveOrderList: 'common/api/TravelApprovalManager/GetApproveOrderList', // 获取待办数据列表
    GetEnterpriseSpecialControlConfig: 'common/api/Customer/SpecialManage/GetEnterpriseSpecialControlConfig',//获取企业特殊管控
    MaintainEnterpriseSpecialControlConfig: 'common/api/Customer/SpecialManage/MaintainEnterpriseSpecialControlConfig',//设置企业特殊管控
    GetToBeFixCustomersByEnterpriseId: 'common/api/Customer/GetToBeFixCustomersByEnterpriseId',//待完善人员列表
    GetToBeFixDepartmentList: 'common/api/Customer/GetToBeFixDepartmentList',//待完善部门列表
    RoleConfigCopy: 'common/api/TravelStandardManager/RoleConfigCopy', //复制差标
    GetExtPbConfigMembers: 'common/api/Customer/SpecialManage/GetExtPbConfigMembers', //查询有外部人员预订权限的员工列表
    AddExtPbConfigMembers: 'common/api/Customer/SpecialManage/AddExtPbConfigMembers', //添加有外部人员预订权限的员工列表
    DeleteExtPbConfigMembers: 'common/api/Customer/SpecialManage/DeleteExtPbConfigMembers', //删除有外部人员预订权限的员工列表
    GetAllCityInfos: 'common/api/City/QueryCountryCityInfos', //获取城市信息 
    GetInternalBookingConfigs: 'common/api/customer/internalBooking/GetInternalBookingConfigs', //内部预订权限配置查询
    MaintainInternalBookingConfigs: 'common/api/customer/internalBooking/MaintainInternalBookingConfigs', //内部预订权限配置维护
    GetEnterpriseSubsidySurvey: 'common/api/travelSubsidy/GetEnterpriseSubsidySurvey', //获取差补名称列表
    GetSubsidyConfigDetail: 'common/api/travelSubsidy/GetSubsidyConfigDetail',     //新增差补
    MaintainSubsidyConfig: 'common/api/travelSubsidy/MaintainSubsidyConfig',      //保存差补配置
    GetSubsidyConfigList: 'common/api/travelSubsidy/GetSubsidyConfigList',        //获取差补配置概览
    MaintainSubsidyCustomerStuff: 'common/api/Customer/MaintainSubsidyCustomerStuff',        //添加员工
    SubsidyConfigCopy: 'common/api/travelSubsidy/SubsidyConfigCopy',             //复制差补
    DeleteSubsidyConfig: 'common/api/travelSubsidy/DeleteSubsidyConfig',         //删除差补
    GetCustomerStuffListBySubsidyId: 'common/api/Customer/GetCustomerStuffListBySubsidyId',         //获取差补员工列表
    DeleteSubsidyCustomerStuff: 'common/api/Customer/DeleteSubsidyCustomerStuff',         //删除差补员工列表
    CouponInfoSearch: 'common/api/coupon/CouponInfoSearch',         //优惠券查询
    getTravelReportList: 'commonapi/api/Customer/getTravelReportList',         //差补报表
    GetEnterpriseConfigList: 'common/api/enterprise/config/GetEnterpriseConfigList', //获取企业配置列表
    GetHotelTogetherList: 'common/api/enterprise/hotelTogether/GetHotelTogetherList', //查询两人同住配置列表
    MaintainHotelTogetherConfig: 'common/api/enterprise/hotelTogether/MaintainHotelTogetherConfig', //维护两人同住配置
    DelHotelTogetherConfig: 'common/api/enterprise/hotelTogether/DelHotelTogetherConfig', //删除两人同住配置
    GetHotelTogetherDetail: 'common/api/enterprise/hotelTogether/GetHotelTogetherDetail',//获取两人同住详情
};
export const hotelApi = {
    GetRoomList: 'hotel/api/hotel/info/GetRoomList',//获取酒店房间列表
    GetAvailHotelBooking: 'hotel/api/hotel/order/GetAvailHotelBooking',//获取酒店可定房间数
    GetBookingPageInfos: 'hotel/api/hotel/order/GetBookingPageInfos',//获取酒店创建订单信息
    SubmitHotelOrder: 'hotel/api/hotel/order/SubmitHotelOrder',//酒店提交创建订单
    QueryCountryCityInfos: 'hotel/api/hotel/city/QueryCountryCityInfos',//酒店城市信息
    ValidateTravelStandard: "hotel/api/hotel/order/ValidateTravelStandard", //差标验证
}
export const carApi = {
    GetOpenAuthUrl: 'car/api/didi/GetOpenAuthUrl',  //获取滴滴注册/授权地址
    GetJHCarOrderDetail: 'car/api/order/QueryOrderExt',   //查看聚合用车订单详情
}
//new Vue().$alert.error('网络异常，请重试');
// $.ajax({
//     url:''
// })
export const $ajaxPost = (api: string, params: any = {}) => {
    let base = localStorage.getItem("apiUrl") || config.PARAM?.API_BASE_URL;
    if (config.WHITELIST.includes(window.location.host)) {
        base = "https://api.ceekeeapi.com/";
    }
    let enterpriseId = Core.getCookie('EnterpriseId');
    let refId = Core.getCookie('refId');
    let platId = Core.getCookie('PlatId');
    let apiConfig;
    if (enterpriseId > 0) {
        apiConfig = apiConfigs.find(x => x.enterpriseId == enterpriseId);
    }
    else if (refId > 0) {
        apiConfig = apiConfigs.find(x => x.refId == refId);
    }
    else if (platId) {
        apiConfig = apiConfigs.find(x => x.type == "thirdService" && x.plantId == platId);
    }
    if (apiConfig) {
        base = apiConfig.apiUrl;
        params.PlatId = apiConfig.plantId;
    } else {
        params.PlatId = params.PlatId || config.URLS.pid;
    }

    let _api = api.indexOf('://') > -1 ? api : `${base}` + api;
    if (!params.MemberId && !params.Token) {
        let userInfo = localStorage.getItem('_User_Info_');
        if (!!userInfo) params.Token = JSON.parse(userInfo)['Token'];
        if (!!userInfo) params.MemberId = JSON.parse(userInfo)['MemberId'];
    }
    params.Version = '5.1.4';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    let timeout = {
        timeout: 120000
    };
    if (api == 'b2b/Enterprise/GetEnterpriseCostReport') {
        timeout = {
            timeout: 500000
        };
    }
    return axios.post(_api, JSON.stringify(params), timeout).then((res: any) => {
        let code = (res.data || {}).Code || '';
        switch (code) {
            case "8001":
            case "8000": // 未登录
                let url = window.location.href;
                Core.logout();
                Core.setCookie("EnterpriseId", "", "");
                localStorage.removeItem('_User_Info_');
                setInterval(() => {
                    window.location.href = url.split('#')[0]
                }, 1000)
            default:
                return res.data || {};
        }
    }).catch(ex => {
        ElMessage.error('网络异常，请重试')
    })
}

export const $ajaxGet = (api: any, names: any, values: any) => {
    let base = localStorage.getItem("apiUrl") || config.PARAM?.API_BASE_URL;
    let terms = '';
    names.forEach(function (d: any, i: any) {
        terms += (d + '=' + values[i] + '&');
    })
    let userInfo = localStorage.getItem('_User_Info_') || '';
    terms = terms + 'Token-Seller-Account=' + JSON.parse(userInfo)['Token-Seller-Account'];
    let _api = api.indexOf('://') > -1 ? api : `${base}` + api + '?' + terms;
    // if (!!userInfo) axios.defaults.headers['Token-Seller-Account'] = JSON.parse(userInfo)['Token-Seller-Account'];
    axios.defaults.timeout = 250000;
    window.open(_api);
    return;
    let instance = axios.get(_api, { timeout: 500000 }).then((res: any) => {
        switch (res.data.code) {
            case '8000':// 未登录
                window.location.href = window.location.href.split('#')[0] + '#/login';
                return {};
                break;
            case 0:
                return res.data || {};
            default:
                ElMessage.error(res.data.msg || '未知')
                return res.data || {};
        }
    }).catch(ex => {
        ElMessage.error('网络异常，请重试')
    });
    return instance;
}