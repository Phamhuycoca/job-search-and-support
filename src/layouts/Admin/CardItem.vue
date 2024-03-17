<template>
    <el-row :gutter="20">
        <el-col>
            <el-row :gutter="20">
                <el-col :lg="8" :xl="8">
                    <el-card shadow="hover" class="h-40 flex justify-center items-center" style="border-radius: 10px"
                        :style="{
        boxShadow: `var(--el-box-shadow)`,
    }">
                        <i class="ri-news-line text-2xl"></i>
                        <span class="max-w-max max-h-max">
                            Tổng số bài đăng viết
                            <p class="text-center">200+</p>
                        </span>
                    </el-card>
                </el-col>
                <el-col :lg="8">
                    <el-card shadow="hover" class="h-40 flex justify-center items-center" style="border-radius: 10px"
                        :style="{
        boxShadow: `var(--el-box-shadow)`,
    }">
                        <i class="ri-community-fill text-2xl"></i>
                        <span class="w-full h-full">
                            Tổng công ty hiện có
                            <p class="text-center">200+</p>
                        </span>
                    </el-card>
                </el-col>
                <el-col :lg="8">
                    <el-card shadow="hover" class="h-40 flex justify-center items-center" style="border-radius: 10px"
                        :style="{
        boxShadow: `var(--el-box-shadow)`,
    }">
                        <i class="ri-file-info-line text-2xl"></i>
                        <span>
                            Tổng số CV ứng tuyển
                            <p class="text-center">200+</p>
                        </span>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
    </el-row>

</template>

<style>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
