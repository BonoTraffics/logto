const user_details = {
  page_title: '사용자 세부 정보',
  back_to_users: '사용자 관리로 돌아가기',
  created_title: '새로운 사용자가 생성되었어요.',
  created_guide: '사용자가 로그인하는데 도움이 되는 정보를 확인해보세요.',
  created_email: '이메일 주소:',
  created_phone: '휴대전화 번호:',
  created_username: '사용자 이름:',
  created_password: '비밀번호:',
  menu_delete: '삭제',
  delete_description: '이 사용자를 영원히 삭제할까요? 이 행동은 취소될 수 없어요.',
  deleted: '해당 사용자가 성공적으로 삭제되었어요.',
  reset_password: {
    reset_password: '비밀번호 초기화',
    title: '정말로 비밀번호를 초기화 할까요?',
    content: '정말로 비밀번호를 초기화 할까요? 이 행동은 취소될 수 없어요.',
    congratulations: '해당 사용자의 비밀번호가 성공적으로 초기화 되었어요.',
    new_password: '새로운 비밀번호:',
  },
  tab_settings: '설정',
  tab_roles: '역할',
  tab_logs: '사용자 기록',
  /** UNTRANSLATED */
  authentication: 'Authentication',
  authentication_description:
    '각 사용자는 모든 사용자 정보를 포함하는 프로파일을 가지고 있어요. 프로파일은 기본 데이터, 소셜 ID, 사용자 정의 데이터로 구성되어 있어요.',
  /** UNTRANSLATED */
  user_profile: 'User profile',
  field_email: '이메일 주소',
  field_phone: '휴대전화 번호',
  field_username: '사용자 이름',
  field_name: '이름',
  field_avatar: '아바타 이미지 URL',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: '사용자 정의 데이터',
  field_custom_data_tip:
    '사용자 정의 색상 및 언어와 같은 미리 정의되지 않은 추가적인 사용자의 정보를 의미해요.',
  field_connectors: '연동된 소셜',
  /** UNTRANSLATED */
  field_sso_connectors: 'Enterprise connections',
  custom_data_invalid: '사용자 정의 데이터는 반드시 유효한 JSON 객체여야 해요.',
  connectors: {
    connectors: '연동',
    user_id: '사용자 ID',
    remove: '삭제',
    /** UNTRANSLATED */
    connected: 'This user is connected with multiple social connectors.',
    not_connected: '이 사용자는 아직 소셜에 연동되지 않았아요.',
    deletion_confirmation: '<name/> 신원을 삭제하려고 해요. 정말로 진행할까요?',
  },
  sso_connectors: {
    /** UNTRANSLATED */
    connectors: 'Connectors',
    /** UNTRANSLATED */
    enterprise_id: 'Enterprise ID',
    /** UNTRANSLATED */
    connected:
      'This user is connected to multiple enterprise identity providers for Single Sign-On.',
    /** UNTRANSLATED */
    not_connected:
      'The user is not connected to any enterprise identity providers for Single Sign-On.',
  },
  mfa: {
    field_name: '다단계 인증',
    field_description: '이 사용자는 2단계 인증 요소를 활성화했습니다.',
    name_column: '다단계 인증',
    field_description_empty: '이 사용자는 2단계 인증 요소를 활성화하지 않았습니다.',
    deletion_confirmation:
      '2단계 인증기에 대한 기존 <name/>을 제거하려고 합니다. 정말로 그렇게 하시겠습니까?',
  },
  suspended: '정지됨',
  suspend_user: '사용자 정지',
  suspend_user_reminder:
    '이 사용자를 정지하시겠습니까? 사용자는 앱에 로그인할 수 없으며 현재 액세스 토큰이 만료된 후 새 액세스 토큰을 얻을 수 없게 됩니다. 또한 이 사용자가 수행한 모든 API 요청이 실패합니다.',
  suspend_action: '정지',
  user_suspended: '사용자가 정지되었습니다.',
  reactivate_user: '사용자 재활성화',
  reactivate_user_reminder:
    '이 사용자를 다시 활성화하시겠습니까? 이렇게 하면이 사용자에 대한 로그인 시도가 허용됩니다.',
  reactivate_action: '재활성화',
  user_reactivated: '사용자가 재활성화되었습니다.',
  roles: {
    name_column: '역할',
    description_column: '설명',
    assign_button: '역할 할당',
    delete_description:
      '이 행동은 사용자에게서 이 역할을 삭제할 거예요. 역할은 그대로 존재하지만, 이 사용자에게 더 이상 할당되지 않아요.',
    deleted: '{{name}}이/가 성공적으로 이 사용자에게서 제거되었어요.',
    assign_title: '{{name}}에게 역할 할당',
    assign_subtitle: '{{name}}에게 하나 이상의 역할을 할당하세요',
    assign_role_field: '역할 할당',
    role_search_placeholder: '역할 이름으로 검색',
    added_text: '{{value, number}}이/가 추가되었어요',
    assigned_user_count: '사용자 {{value, number}}명',
    confirm_assign: '역할 할당',
    role_assigned: '역할을 성공적으로 할당했어요',
    search: '역할 이름, 설명, ID로 검색',
    empty: '역할 없음',
  },
  warning_no_sign_in_identifier:
    '사용자는 로그인 식별자(사용자 이름, 이메일, 전화 번호 또는 소셜) 중 적어도 하나를 갖고 로그인해야 합니다. 계속 하시겠습니까?',
};

export default Object.freeze(user_details);
