import { diskStorage } from 'multer';

export const multerOptions = {
  /**
   * @auther: 이호연
   * @date: 2023/06/02
   * @description: multer option
   *
   * @param: request Request 객체
   * @param: file 파일 정보
   */
  fileFilter: (req, file, cb) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      cb(null, true);
    } else {
      cb(new Error('지원되는 파일 형식이 아닙니다.'), false);
    }
  },

  limits: {
    fileSize: 1024 * 1024 * 10,
    files: 1,
  },

  storage: diskStorage({
    destination: './images',
    filename: (req, file, cb) => {
      const ext = file.originalname.split('.').pop();
      const filename = `${file.originalname.replace(
        `.${ext}`,
        '',
      )}_${Date.now()}.${ext}`;
      cb(null, filename);
    },
  }),
};
