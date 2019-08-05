#!/bin/bash
# --------------------------------------------------------------
#
# ʹ��˵����
# 1: �ýű�ʹ��ǰ��Ҫ�����޸� MAIN_CLASS ֵ��ʹ��ָ��ʵ�ʵ�������
#
# 2��ʹ�������� ./jfinal.sh start | stop | restart ������/�ر�/������Ŀ  
#
# 3: JAVA_OPTS ��ͨ�� -D ���� undertow.port �� undertow.host �����������
#    �����ļ��е���ֵͬ���⻹�� undertow.resourcePath��undertow.ioThreads��
#    undertow.workerThreads �����������ͨ�� -D ���д��룬�ù��ܾ����ܼ�����
#    �޸� undertow �����ļ��ı�Ҫ��
#
# 4: JAVA_OPTS �ɴ����׼�� java �����в��������� -Xms256m -Xmx1024m ���ೣ�ò���
#
# 5: ���� start() ������ 4 ��������Ŀ�������У�����ע���е���ʾ����ѡ����ʵķ�ʽ
#
# --------------------------------------------------------------
 
# ��������࣬�ýű��ļ����ڱ����ĿʱҪ������
MAIN_CLASS=com.yourpackage.YourMainClass
 
if [[ "$MAIN_CLASS" == "com.yourpackage.YourMainClass" ]]; then
    echo "�����޸� MAIN_CLASS ��ֵΪ���Լ���Ŀ����Class��Ȼ����ִ�д˽ű���"
	exit 0
fi
 
COMMAND="$1"
 
if [[ "$COMMAND" != "start" ]] && [[ "$COMMAND" != "stop" ]] && [[ "$COMMAND" != "restart" ]]; then
	echo "Usage: $0 start | stop | restart"
	exit 0
fi
 
 
# Java �����в�����������Ҫ������������ã��ĳ��Լ���Ҫ�ģ�ע��Ⱥ�ǰ�����пո�
# JAVA_OPTS="-Xms256m -Xmx1024m -Dundertow.port=80 -Dundertow.host=0.0.0.0"
# JAVA_OPTS="-Dundertow.port=80 -Dundertow.host=0.0.0.0"
 
# ���� class path ֵ
APP_BASE_PATH=$(cd `dirname $0`; pwd)
CP=${APP_BASE_PATH}/config:${APP_BASE_PATH}/lib/*
 
function start()
{
    # ����Ϊ��̨���̣����ڿ���̨�����Ϣ
    java -Xverify:none ${JAVA_OPTS} -cp ${CP} ${MAIN_CLASS} &
 
    # ����Ϊ��̨���̣����Ҳ��ڿ���̨�����Ϣ
    # nohup java -Xverify:none ${JAVA_OPTS} -cp ${CP} ${MAIN_CLASS} >/dev/null 2>&1 &
 
    # ����Ϊ��̨���̣����ҽ���Ϣ����� output.log �ļ�
    # nohup java -Xverify:none ${JAVA_OPTS} -cp ${CP} ${MAIN_CLASS} > output.log &
 
    # ����Ϊ�Ǻ�̨���̣������ڿ����׶Σ���ݼ� ctrl + c ��ֹͣ����
    # java -Xverify:none ${JAVA_OPTS} -cp ${CP} ${MAIN_CLASS}
}
 
function stop()
{
    # ֧�ּ�Ⱥ����
    kill `pgrep -f ${APP_BASE_PATH}` 2>/dev/null
    
    # kill ���ʹ�� -9 ����ʱ����ص� onStop() ������ȷ������Ҫ�˻ص�����ʹ�� -9 ����
    # kill `pgrep -f ${MAIN_CLASS}` 2>/dev/null
 
    # ���´�������������ȼ�
    # kill $(pgrep -f ${MAIN_CLASS}) 2>/dev/null
}
 
if [[ "$COMMAND" == "start" ]]; then
	start
elif [[ "$COMMAND" == "stop" ]]; then
    stop
else
    stop
    start
fi