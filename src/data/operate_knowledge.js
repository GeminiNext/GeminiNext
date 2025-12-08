export const operateKnowledgeData = [
    {
        category: "1. 数据输入与输出",
        items: [
            {
                title: "读取 Excel 文件",
                tags: ["pandas"],
                desc: "读取 Excel 文件到 DataFrame [1]",
                code: `pd.read_excel("file_name.xlsx")`
            },
            {
                title: "保存 CSV 文件",
                tags: ["pandas"],
                desc: "将 DataFrame 保存为 CSV 文件 [1]",
                code: `data.to_csv("file_name.csv", index=False)`
            }
        ]
    },
    {
        category: "2. 数据清洗与查看",
        items: [
            {
                title: "查看数据基本信息",
                tags: ["pandas"],
                desc: "查看前几行数据、数据框基本信息、维度 [2]",
                code: `data.head(5)
data.info()
row_count = data.shape`
            },
            {
                title: "缺失值处理",
                tags: ["pandas"],
                desc: "计算缺失值数量 [2]，填充缺失值（前向/后向）[1]，删除缺失行 [1]",
                code: `data.isnull().sum()
data.fillna(method='ffill', inplace=True)
data.dropna(subset=['column'])`
            },
            {
                title: "重复值处理",
                tags: ["pandas"],
                desc: "检查重复行与删除重复行 [3]",
                code: `data.duplicated().sum()
data.drop_duplicates()`
            },
            {
                title: "列操作",
                tags: ["pandas"],
                desc: "删除指定的行或列、重命名列名 [3]",
                code: `data.drop(columns=['col1', 'col2'])
data.rename(columns={'old': 'new'})`
            }
        ]
    },
    {
        category: "3. 特征工程与数据转换",
        items: [
            {
                title: "数据类型转换",
                tags: ["pandas"],
                desc: "转换数据类型、日期格式、数值格式 [1], [3]",
                code: `data['col'].astype(int)
pd.to_datetime(data['date_column'])
pd.to_numeric(data['col'], errors='coerce')`
            },
            {
                title: "数据标准化与归一化",
                tags: ["sklearn", "numpy"],
                desc: "StandardScaler (均值0方差1) [3]，MinMaxScaler (0-1范围) [4]，手动标准化 [4]",
                code: `scaler = StandardScaler()
data = scaler.fit_transform(data)

scaler = MinMaxScaler()
data = scaler.fit_transform(data)

(data - data.mean()) / data.std()`
            },
            {
                title: "编码与分箱",
                tags: ["pandas", "sklearn"],
                desc: "哑变量转换 [1]，标签编码 [4]，连续数据分箱 [5]",
                code: `pd.get_dummies(data['column'])
encoder = LabelEncoder()
data = encoder.fit_transform(labels)
pd.cut(data, bins=[...], labels=[...])`
            }
        ]
    },
    {
        category: "4. 数据统计、筛选与聚合",
        items: [
            {
                title: "数据筛选",
                tags: ["numpy", "pandas"],
                desc: "条件选择 (np.where) [4]，列表检查 (isin) [4]，范围选择 (between) [4]",
                code: `np.where(cond, val_true, val_false)
data[data['col'].isin([v1, v2])]
data[data['col'].between(18, 70)]`
            },
            {
                title: "统计计算",
                tags: ["pandas"],
                desc: "唯一值计数 [5]，总和 [5]，分位数与IQR [2]，描述性统计 [2]",
                code: `data['col'].value_counts()
data.sum()
data.describe()
Q1 = data['col'].quantile(0.25)`
            },
            {
                title: "分组与合并",
                tags: ["pandas"],
                desc: "分组聚合 (groupby) [5]，数据连接 (concat) [2]",
                code: `data.groupby('col')['val'].mean()
pd.concat([X, y], axis=0/1)`
            }
        ]
    },
    {
        category: "5. 数据可视化",
        items: [
            {
                title: "基本图表",
                tags: ["matplotlib"],
                desc: "创建柱状图、散点图、饼图 [6]",
                code: `data.plot(kind='bar', stacked=True)
plt.scatter(x, y)
data.plot.pie()`
            }
        ]
    },
    {
        category: "6. 机器学习建模",
        items: [
            {
                title: "数据集划分与平衡",
                tags: ["sklearn", "imbalanced-learn"],
                desc: "划分训练/测试集 [6]，SMOTE处理类别不平衡 [7]",
                code: `train_test_split(X, y, test_size=0.2)
SMOTE().fit_resample(X_train, y_train)`
            },
            {
                title: "模型初始化与训练",
                tags: ["sklearn", "xgboost"],
                desc: "逻辑回归、随机森林、XGBoost [6]，模型训练 [6]",
                code: `model = LogisticRegression(max_iter=1000)
model = RandomForestRegressor(...)
model = xgboost.XGBRegressor(...)
model.fit(X_train, y_train)`
            },
            {
                title: "预测与流水线",
                tags: ["sklearn"],
                desc: "模型预测 [7]，创建处理流水线 (Pipeline) [7]",
                code: `y_pred = model.predict(X_test)
# Pipeline sklearn 创建流水线`
            }
        ]
    }
];
