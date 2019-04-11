import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
    menu: { // 菜单
        home: '首页',
        blockChain: '区块链',
        blockChainItem:{
            viewTxns: '查看交易',
            viewPendingTxns: '查看待处理交易',
            viewBlocks: '查看区块'
        },
        node: '节点',
        nodeItem:{
            validatorNode:'共识节点',
            obsoleteNode:'历史节点',
        },
        more: '更多',
        moreItem: {
            wallet: '钱包',
            help: '开发帮助'
        },
        comesoon:'敬请期待',
        goole:'Google reCAPTCHA无法获取！'
    },
    search: {
        searchBtn: '查询',
        placeHolder: ' 请输入区块高度/地址/块哈希/交易哈希'
    },
    breadcrumb: {
        walletWatermark: '钱包',
        home: '首页',
        wallet: '钱包'
    },
    footer: {
        desc: 'PlatScan是PlatON区块链资源管理与分析平台',
        links: '链接',
        help: '开发帮助',
        wallet: '钱包',
        officialWebsite: 'PlatON官网',
        whitePaper: '白皮书',
        community: '社区'
    },
    wallet: {
        officeWallet: '官方钱包',
        download: '下载链接',
        developer: '开发者网站',
        thirdPartyWallet: '第三方钱包',
        nothirdPartyWallet: '无第三方钱包，请点击',
        submitBtn: '提交'
    },
    tradeAbout:{
        morethen:'总共寻获超过',
        transactions:'交易',
        transactions1:'交易',
        record:'显示最新500k记录',
        hash:'交易哈希值',
        block:'区块',
        age:'块龄',
        from:'发送方',
        to:'接收方',
        toA:'接收地址',
        value:'数额',
        fee:'交易费用',
        before:'前',
        txInfo:'交易信息',
        viewLeft:'查看前一个交易',
        viewRight:'查看后一个交易',
        information:'Transaction Information',
        timestamp:'时间戳',
        txHash:'交易hash',
        txReceiptStatus:'状态',
        actualTxCost:'交易费用',
        energonLimit:'能量限制',
        energonUsed:'消耗的能量',
        energonPrice:'能量价格',
        blockHeight:'区块高度',
        inputData:'发出数据',
        confirmNum:'区块确认',
        success:'成功',
        fail:'失败',
        type:'交易类型',
        voteStaked:'投票质押',
        votefor:'投票给',
        tickets:'票数',
        nodeID:'节点ID',
        reduction:'减持',
        withdraw:'提取',
        tradein:'总共寻获 {count} 交易',
        moretradein:'总共寻获超过> {count} 交易'
    },
    tradePendingAbout: {
        address:'地址',
        morethen: '总共寻获',
        transactions: '待处理交易',
        transactions1:'待处理交易',
        hash: '交易哈希值',
        age: '停留时间',
        from: '发送方',
        to: '接收方',
        value: '数额',
        value1:'价值',
        fee: '交易费用',
        before: '前',
        txInfo: '交易信息',
        viewLeft: '查看前一个交易',
        viewRight: '查看后一个交易',
        information: 'Transaction Information',
        pending:'待处理',
        timestamp: '交易接收时间',
        txHash: '交易hash',
        energonLimit: '能量限制',
        energonUsed: '消耗的能量',
        energonPrice: '能量价格',
        blockHeight: '区块',
        inputData: '发出数据',
        expectTime:'预计确认时间',
        energonPrice1:'能量价值'
    },
    blockAbout: {
        address:'地址',
        morethen: '总共',
        block: '区块',
        blockH: '区块',
        height:'区块高度',
        age:'块龄',
        interval:'间隔',
        transaction :'交易数',
        size:'区块大小',
        miner:'出块节点',
        energonUsed:'能量消耗',
        energonAverage:'平均能量价值',
        blockReward:'奖励',
        before:'前',
        info:'区块信息',
        viewLeft:'查看前一个区块',
        viewRight:'查看后一个区块',
        information:'Block Information',
        height1:'区块高度',
        timestamp:'时间戳',
        transactions:'交易',
        hash:'区块哈希',
        parentHash:'上一区块哈希',
        energonLimit:'能量限制',
        blockReward1:'区块奖励',
        extraData:'额外数据',
        in:'{timeDiff}秒内',
        txHash:'交易哈希值',
        transactionBlock:'交易-区块',
        actualTxCost:'交易费用',
        from:'发送方',
        to:'接收方',
        value:'数额',
        worth:'价值',
        votes:'投票',
        tickets:'选票数',
        ticket:'选票',
        declarations:'声明',
        piaoshu:'票数',
        transactionBlockss:'投票交易',
        votetransaction:'投票交易',
        delacvote:'声明交易-区块',
        delacvotes:'声明交易',
        nodename:'节点名称',
        type:'类型',
        zhiyajin:'质押金'
    },
    totalInfo:{
        info:'地址信息',
        overview:'概览',
        balance:'余额',
        transactions:'交易',
        votes:'投票',
        voteFor:'投票给',
        dectarations:'声明',
        votesNodes:'投票节点数',
        votesStaked:'投票质押',
        pendtransaction:'个待处理交易',
        pendVoteTransaction: '个待处理投票交易',
        pendDectransaction: '个待处理交易',
        download:'下载',
        txHash:'交易哈希值',
        blockTime:'确认时间',
        pending:'待处理',
        txType:'类型',
        from:'发送方',
        to:'接收方',
        value:'数额',
        actualTxCost:'交易费用',
        info1:'合约详情',
        else:'其他',
        contractcreator:'合约开发者',
        contractowner:'合约拥有者',
        nodeName:'节点名称',
        staked:'质押金',
        validInvaildTickets:'有效票/投票数',
        ticketPrice:'票价',
        profit:'收益',
        txFee:'交易费用',
        others:'其他',
        validTickets:'有效票',
        ticketID:'选票ID',
        owner:'拥有者',
        EAtime:'预计/实际过期时间',
        reward:'奖励'
    },
    download:{
        info:'下载数据',
        title:'下载当前地址的交易\\投票\\声明记录，在下载之前，请验证您是否是机器人！(请确保当前VPN可用)',
        date:'数据日期',
        placeholder:'选择日期',
        download:'下载',
        placeholder1:'请选择日期',
        robot:'请验证您是否是机器人！',
        googleAPINotAvailable:'Google reCAPTCHA无法获取！',
        downloadTip:'（最多支持下载3万条数据）'
    },
    elseInfo:{
        transfer:'转账',
        vote:'投票',
        voteTicket:'投票',
        contractCreate:'合约创建',
        transactionExecute:'合约执行',
        MPCtransaction :'MPC交易',
        authorization:'权限',
        contract:'合约',
        create:'合约创建',
        count:'实时',
        hour:'时',
        minutes:'分',
        seconds:'秒',
        day:'天',
        loading:'加载中...',
        validatorStake:'质押',
        reduceStake:'减持质押',
        withdrawStake:'提取质押',
        send:'发送',
        receive:'接收',
        candidateDeposit:'质押',
        candidateApplyWithdraw:'减持质押',
        candidateWithdraw:'提取质押',
        unknown:'未知',
        normalVote:'中选票',
        houxuanVote:'候选中',
        guoqiVote:'已失效',
        waitsure:'待确认'
    },
    modalInfo:{
        copysuccess:'已复制到剪贴板',
        copyfail:'复制失败'
    },
    breadCrumb:{
        pending:'待处理交易',
        trade:'交易',
        block:'区块',
        node:'节点'
    },
    indexInfo:{
        blockHeight:'当前区块高度',
        node:'出块节点',
        currentTransaction:'当前交易笔数',
        consensusNodeAmount:'共识节点数',
        addressAmount:'地址数',
        voteAmount:'投票数',
        proportion:'占比',
        ticketPrice:'票价',
        timeandnum:'出块时间及交易数量',
        avgTime:'平均出块时长',
        current:'当前',
        maxTps:'最大交易TPS',
        avgTransaction:'平均区块交易数',
        transactionsperday:'每日交易笔数',
        monitor:'过去24小时交易笔数实时统计',
        blocks:'最新区块',
        height:'区块高度',
        age:'块龄',
        txn:'交易数',
        blockReward:'奖励',
        transactions:'最新交易',
        txhash:'交易哈希',
        before: '前',
        realtime: '实时',
        view:'查看全部',
        searchno:'查询无结果！',
        cancel:'取消'
    },
    nodeInfo:{
        incentiveplan:'激励计划',
        rewardratio:'投票激励',
        totalbp:'累计共识奖励',
        totalvot:'累计投票奖励',
        index:'节点',
        validate:'节点',
        rule:'规则',
        ranking:'排名',
        No:'序号',
        name:'节点',
        nodeName:'节点',
        electionStatus:'状态',
        location:'位置',
        deposit:'质押金',
        blockCount:'已产生区块数',
        rewardRatio:'分红比例',
        placeHolder:'输入节点账户名称查询',
        candidate:'候选前100名',
        standby:'备选前100名',
        nodeinfo:'节点详情',
        jointime:'加入时间',
        stakedrank:'质押排名',
        totalincome:'累计收益',
        blocks:'累计出块',
        averagetime:'平均出块时长',
        totalreward:'累计分红',
        nodeinfo1:'节点信息',
        nodeblock:'节点出的区块',
        baseinfo:'基本信息',
        nodeaddress:'节点地址',
        nodepublickey:'节点ID',
        nodewallet:'节点钱包',
        nodedes:'节点简介',
        plan:'收益计划',
        info:'机构信息',
        jigouname:'机构名称',
        jigounet:'机构官网',
        block:'区块',
        timestamp:'时间戳',
        transactions:'交易数',
        blockreward:'区块奖励',
        export:'导出csv',
        ratio:'投票数/占比',
        blockReward:'每区块奖励',
        ticketPrice:'票价',
        validatorNode:'共识节点',
        obsoleteNode:'历史节点',
        dateObsolete:'淘汰时间',
        minMaxstaked:'最低/最高质押',
        selected:'中选次数',
        tickets:'得票数',
        ticketage:'票龄',
        candidates:'候选节点',
        nominees:'提名节点',
        validator:'验证节点'
    },
    ...zhLocale
}
